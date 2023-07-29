#!/bin/bash

# Define the directory containing the images
dir="./public"

# Loop through the JPG and JPEG files larger than 1MB
find $dir -type f \( -iname \*.jpg -o -iname \*.jpeg \) -size +1M |
while read file
do
    echo "Processing $file"
    
    # Use ImageMagick's convert function to compress the image
    convert "$file" -define jpeg:extent=1MB "$file"
done
