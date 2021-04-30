---
layout: post
title: Make a globe in Adobe Illustrator
description: "Make a globe in Adobe Illustrator"
header: "Make a globe in Adobe Illustrator"
---
I wanted to make an image of a globe with continents and meridians — like a beach ball floating in space. In Illustrator there are no warping effects that I know of that that can transform rectangular shapes into globe gores. So what I had to do was use the 3D effects to get it to look right. I did find this [Design Cuts](https://www.youtube.com/channel/UCX7xWfhniiy9j4y9uGlQkSw) [video tutorial](https://www.youtube.com/watch?v=6wF4iKTIjMQ) very helpful for getting started, but though I might outline what I did to make my sphere a bit more globe-like.


# Make the projected map a symbol

I started by using QGIS to create the shapes of the continents that I wanted to drape over my globe. Natural Earth small scale data (1:110m) was the logical choice to use because of its availability and license.   projected in a Mercator projection.  


Let's experiment with using 60 rectangles representing – one for each of the world's 60 UTM zones.

In Illustrator, start with an artboard that is approximately the aspect ratio of a world map in the Mercator projection. The one I'm using for this is 2400px tall by 3600px wide.

Make a rectangle that's 50px wide and 2000px high.
1. Select the rectangle tool
2. Click your artboard to create a rectangle that's 50px wide and 2000px high.
3. Make 60 copies of this rectangle by selecting it, then going to Object > Transform > Transform Each. In this dialog, make sure that you set the horizontal move to the width of the rectangle. In this case, 50 px. Click Copy.
4. Now select Object > Transform > Transform Again (Command + D on Mac) until you have 60 rectangles.

You should have something that looks like this:
!["60 rectangles"](../img/60-recs.png)

Now let's blend a couple of colors across the spectrum to make it look interesting.

Start by selecting the farthest left rectangle, and then making it a color of your choice. I picked a cool green color.

create a rectangle that is super tall and skinny.
