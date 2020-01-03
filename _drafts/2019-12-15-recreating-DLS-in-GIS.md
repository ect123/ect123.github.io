---
layout: post
title: Dominion Land Survey System in BC (Part 2)
description: "Digitizing the Dominion Land Survey System in BC"
header: " DLS: PAPER to DIGITAL"

---

This is a bit more complicated than simply creating a fishnet. Although I've though about starting with one to use as a reference point, but I'm pretty sure that it won't be worth the effort as it'll probably be too inaccurate to be of any real use. So, I'm going to build this piece by piece.     
I would have preferred to use QGIS/Grass to do this, but since I'm trying to be more proficient with ArcGIS Pro for work, I decided to use it for this. Would be interesting to see the QGIS process for this same thing.

# Step One:
Create meridians at 114° west longitude, 118° west longitude, and 122° west longitude. Southern extent is 49° north latitude, and northern extent is 60° north latitude. Use NAD 1927 since it's based on points calculated during the 1800s.  
# Step Two:
Create a baselines line at 49° north latitude
# Step Three:
[Create point features along the baseline](https://pro.arcgis.com/en/pro-app/help/editing/create-point-features-along-a-line.htm).

<iframe src="maps/simple-map.html" height="600" width="100%" frameborder="0"></iframe>
