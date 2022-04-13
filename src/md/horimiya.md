--- 
manga: Horimiya
title: Horimiya
type: movie
aired: September 17, 2016
duration: 2hr 10min
genre: Drama, School, Shounen
studio: Kyoto Animation
image: /img/horimiya.jpg 
tags: ["post","featured"]
---
<link rel="stylesheet" href="/style/style.css">
{% include 'nav.njk'%}
       {%- for post in collections.post -%}
 <h3 class="article-title">{{post.data.manga}}</h3>
   {%- endfor -%}