---
title: Testing large React applications
short: Setting up a local LLM on Mac so that it's always ready for your questions
date: '2024-06-16'
slug: testing-large-react-apps
createdAt: '2023-06-16'
img: blog-2.jpg


tags:
  - Note
---

# Testing large React applications


I've been writing a lot of tests for large applications at Rapid7 and I think the strategies for writing tests with React Testing Library and Jest carry over nicely to small projects.

## Group tests by source files
For large applications it's good to write tests in files that correspond with the source files they are testing. So `login.ts` should be tested by `login.test.ts`, and `logout.ts` should be tested by `logout.test.ts`. They shouldn't be tested in a single `auth.test.ts` file. The layout of your `/tests` directory should mirror the `/src` directory - [this pattern is very common in Java projects.](https://symflower.com/en/company/blog/2022/best-practices-for-test-files/)

As the number of tests grows, this lets us keep the relationships between our application and its tests manageable. The downside of this is that we are organising tests based on implementation rather than the behaviour we actually want to test. 

A project directory structure where tests mirror src:
```txt
/react-app
|-- /node_modules                      
|-- /src                     
|   |-- /components          
|   |   |-- /Header
|   |   |   |-- Header.tsx   
|   |   |-- /Footer
|   |   |   |-- Footer.tsx   
|   |-- /utils               
|   |   |-- validate.ts      
|   |-- App.tsx              
|   |-- index.tsx            
|-- /tests           
|   |-- /components          
|   |   |-- /Header
|   |   |   |-- Header.test.tsx  
|   |   |-- /Footer
|   |   |   |-- Footer.test.tsx  
|   |-- /utils               
|   |   |-- validate.test.ts 
|   |-- App.test.tsx                
|-- package.json                         
|-- README.md                
```

## Group related tests with nested describes
Jest allows you to group tests together with the [`describe`](https://jestjs.io/docs/api#describename-fn) keyword. Within the describe scope, tests can share the same setup functions, mocks, and cleanup functions. The use of `describe` blocks makes tests easier to read, document, skip, and understand.

Describes are especially useful for grouping tests that examine the same component under different states. By giving each state its own describe, we can keep tests that share mock data together, and apart from tests that require different mock data. This avoids issues where test environments aren't cleaning up as expected after tests, I run into this issue a lot when tests rely on mocks that aren't organised in `describe` blocks. 

It's hard to make an example of this using simple code because this type of test structure really only comes into it's own when you're using something like a complex Redux store to handle state. 

Here's a not-real code example that gets across the main idea:
```js
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../../components/Dashboard";

describe('Dashboard', () => {
    describe('Admin permissions', () => {
        let handleDelete = jest.fn();

        beforeEach(() => {
            store = mockStore({
                userProfile: {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    permissions: "admin"
                }
            });

            render(
                <Provider store={store}>
                    <Dashboard />
                </Provider>
            );
        });

        test('renders correct user email', () => {
            const userEmail = screen.getByTestId('user-email');
            expect(userEmail).toBeInTheDocument();
            expect(userEmail).toHaveTextContent('john.doe@example.com');
        });

        test('allows user to delete important thing', () => {
            const handleDelete = jest.fn();
            const deleteButton = screen.getByTestId('delete-button');
            expect(deleteButton).toBeInTheDocument();
            fireEvent.click(deleteButton);
            expect(handleDelete).toHaveBeenCalled();
        });
    });

    describe('Guest permissions', () => {
        let handleDelete = jest.fn();

        beforeEach(() => {
            store = mockStore({
                userProfile: {
                    name: 'Average Joe',
                    email: 'average.joe@example.com',
                    permissions: "guest"
                }
            });

            render(
                <Provider store={store}>
                    <Dashboard />
                </Provider>
            );
        });

        test('renders correct user email', () => {
            const userEmail = screen.getByTestId('user-email');
            expect(userEmail).toBeInTheDocument();
            expect(userEmail).toHaveTextContent('average.joe@example.com');
        });

        test('does not allow user to delete important thing', () => {
            const handleDelete = screen.getByTestId('delete-button');
            expect(deleteButton).toBeInTheDocument();
            fireEvent.click(deleteButton);
            expect(handleDelete).not.toHaveBeenCalled();
        });
    });
});

```

[Ken C Dodds suggests avoiding describes when writing tests](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing), so take my recommendations with a pinch of salt. His use-case is slightly different though, as he suggests grouping tests by behaviour being tested, rather than the source files being tested. I recommend grouping tests by their source file, and then grouping by behaviour using describes within each test file. 

You'd think these details wouldn't matter for small codebases, but we naturally have a lot less time and attention to give them, so organising the tests in a straightfoward way is very useful. 