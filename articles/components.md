---
title: 'Component random testing'
description:
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
  sed consequuntur error repudiandae numquam deserunt quisquam
  repellat libero asperiores earum nam nobis'
slug: components-testing
author: 'Godwin peter .O'
draft: false
navigation: true
tags: Tech, Blog, Vue
publishedAt: 2024-04-08
image:
  src: '/assets/image.jpg'
  alt: 'placeholder'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'blog, vue, content, tests'
---

<br />
<br />

**Inline component**

:content-banner

**Card component**

::content-card
The content of the card
::

**Default slot component**

::content-hero
Default slot text

#description
This will be rendered inside the `description` slot.
::

**Component nesting**

::content-hero
:::content-card
A nested card
::content-card
A super nested card
::
:::
::

**Alert component**

::content-alert{type="warning" icon="exclamation-circle"}
Oops! An error occurred
::
