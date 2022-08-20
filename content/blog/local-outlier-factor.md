---
title: Local outlier factor from scratch in Python 
short: Explaination and implementation of the local outlier factor algorithm.
date: 3 June 2021
slug: local-outlier-factor
createdAt: 3 June 2021
img: blog-2.jpg


tags:
  - OpenHands
  - Python
  - Code
---

# Local outlier factor from scratch in Python 


### Overview

Local outlier factor (LOF) is an anomaly detection algorithm which can give you an idea of how similar an item is to other items in a dataset. 

The algorithm essentialy compares the density of an item's neighbourhood (how close the items in an area are to eachother) to the density of the item's neighbour's neighbourhoods. 


### Why use local outlier factor?

LOF is great for datasets with several clusters because it only compares an item to other items in it's locality.  

This means that an item that is a large distance from it's nearest neighbours may not be classified as an outlier so long as it's neighbours are also large distances from their nearest neighbours.  

This image shows how an outlier in one area of a dataset may not be an outlier in another area of the dataset: 



<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/LOF.svg/1024px-LOF.svg.png" width="450" alt="Local outlier factor diagram">
<figcaption center class="figure-caption text-center">Source: Wikipedia</figcaption>


\
&nbsp;
\
&nbsp;

### Implenting the algorithm in Python

This is how LOF is implemented in the [OpenHands project](https://github.com/PaulTreanor/openhands).

The algorithm is split into 3 methods corrosponding to the 3 maths functions from the [algorithm's Wikipedia page](https://en.wikipedia.org/wiki/Local_outlier_factor).

The LOF method takes 4 arguments:
<ul class="pl-5">
  <li>A (the item to be classified, as a list of features)</li>
  <li>a list of A's nearest neighbours</li>
  <li>an instance of the KNN classifier</li>
  <li>a value for K</li>
</ul>




##### 1. Reachability distance 


<img  src="/rdist.png" alt="reachability distance">

\
&nbsp;

The reachability distance between items A and B is the distance between B and it's Kth nearest neighbour or the distance between A and B (whichever is larger).

```python
def  reachability_distance(A, B, classifier, k):
    B_n_neighbours = classifier.get_knn(B)
    k_dist = max([distance.euclidean(B, n) for n in B_n_neighbours])
    AB_dist = distance.euclidean(A, B)
    r_distance = max(k_dist, AB_dist)
    return r_distance
```

\
&nbsp;

##### 2. Local reachability density 


<img src="/lrd.png" alt="local reachability density">

\
&nbsp;


Local reachability density is the inverse of the average reachability distance between A and each of it's K nearest neighbours. 


```python

def  local_r_density(A, nearest_neighbours, classifier, k): # Local reachability density
    r_distance_list = []
    for B in nearest_neighbours:
        B_r_distance = rDistance(A, B, classifier, k)
        r_distance_list.append(B_r_distance)
    avg_r_distance = sum(r_distance_list)/k
    local_r_density = 1.0/avg_r_distance
    return local_r_density
```


\
&nbsp;

##### 3. Local outlier factor


<img src="/lof.png" alt="local outlier factor">

\
&nbsp;
The local outlier factor of object A can then be defined as the average local reachability-density of each of A’s neighbours divided by the local reachability-density of A.

```python
def  local_outlier_factor(A, nearest_neighbours, classifier, k):
    A_local_r_density = local_r_density(A, nearest_neighbours, classifier, k)
    local_r_density_list = []
    for B in nearest_neighbours:
        B_n_neighbours = classifier.get_knn(B)
        B_local_r_density = local_r_density(B, B_n_neighbours, classifier, k)
        local_r_density_list.append(B_local_r_density)
    local_r_density_total = sum(local_r_density_list)
    divisor = A_local_r_density*k
    local_outlier_factor = local_r_density_total/divisor
    local_outlier_factor = -local_outlier_factor
    return local_outlier_factor
```

\
&nbsp;

### Performance

LOF is slow because since it essentially runs KNN *k<sup>2</sup>+1* times. If performance is important it may be worth looking at the [local *distance* outlier factor](https://doi.org/10.1145/342009.335388) algorithm instead. 


### Resources

<ol class="pl-5">
  <li><a href="https://en.wikipedia.org/wiki/Local_outlier_factor">Local outlier factor's excellent Wikipedia page.</a></li>
  <li><a href="https://benwtrent.github.io/2019/04/26/outlier-detection-from-scratch/">Benjamin Trent's very elegant implementation of LOF.</a></li>
  <li><a href="https://doi.org/10.1145%2F335191.335388">The OG local outlier factor paper by Breunig and Kriegel.</a></li>
</ol>

