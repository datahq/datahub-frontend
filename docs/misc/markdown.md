---
title: 5 minutes Markdown guide
date: 2017-12-21
author: [Dima German]
---

Markdown is an easy-to-use markup language, used to format docs for web, using plain text.  
Used by datahub, github, bitbucket and many many more.

### text:

`usual text` usual text  
`*italic text*` *italic text*   
`**bold text**` **bold text**,  
`~~crossed though~~` ~~crossed though~~  
`double space` - linebreak

`---` line:

---  
### Blockquotes

```
Santa Claus said:
> Happy Christmas, hohoho
```

Santa Claus said:
> Happy Christmas, hohoho


### Headers 

```
# this is a Header1
## Header2
...
###### Header6
```

### links

`https://example.com` https://example.com - automatic  
`[Example](https://example.com)` [Example](https://datahub.io) - defined text  
`![alt text](https://goo.gl/YPFoy5 "image title")`
![alt text](https://goo.gl/YPFoy5 "image title")

### lists

```
* task 1
* task 2
  * task 2a
  * task 2b
```

* task 1
* task 2
  * task 2a
  * task 2b

List with checkboxes:
```
* [x] unchecked 
* [ ] checked
```

* [x] task 1 
* [ ] task 2

### code

```
This is an inline code: `inline code`
```

This is an inline code: `inline code`
  
Multi-line code starts with triple back apostrophe (also you can add the programming language name - ```[python|bash|php|etc]  
print('hello world)
```python
print('hello world)
```
and ends with triple back apostrophe as well.

---
As you can see, formatting text with Markdown is as easy as using notepad. Also, the markdown syntax could be extended easily, and here is the extra features, you can use to format pages for datahub.

## DataHub specific features

### FrontMatter

In the world of computer programming, **frontmatter** is metadata at the top of a file. 
Just put your metadata between two lines like this:

```
---
title: Installing data
date: 2017-12-21
author: [Dima German]
---
```

And our site engine will use this metadata while forming the page. The result you can see on top of this page ('author' is used in the blog posts)


### Table of content
 
If you will add `[TOC]` in your document - [TOC] will be automatically transformed into Table Of Content section, with links to all your Headers.

## The end

You can check your skills on https://hackmd.io/ - online markdown notes site.