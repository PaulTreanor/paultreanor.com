#!/bin/bash

# Specify your file path
FILE_PATH="pages/fix-mac-monitor.md"

# Get the list of commit hashes
COMMIT_HASHES=$(git log --pretty=format:%H --follow -- $FILE_PATH)

for COMMIT_HASH in $COMMIT_HASHES; do
    # Get the file status and path for each commit
    FILE_STATUS=$(git show --name-status $COMMIT_HASH | grep $FILE_PATH)

    # If the file has been renamed, the line will start with R100 or R
    if [[ $FILE_STATUS == R100* ]] || [[ $FILE_STATUS == R* ]]; then
        # Extract both the original and new file paths
        ORIGINAL_PATH=$(echo $FILE_STATUS | awk '{print $2}')
        RENAMED_PATH=$(echo $FILE_STATUS | awk '{print $3}')
        echo "Commit: $COMMIT_HASH"
        echo "Original path: $ORIGINAL_PATH"
        echo "Renamed path: $RENAMED_PATH"
    fi
done

