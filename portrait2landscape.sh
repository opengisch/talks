#!/bin/sh

images=`ls 2*.png`

for file in $images
do
composite -gravity center $file bg.png $file
done


echo "DONE"
