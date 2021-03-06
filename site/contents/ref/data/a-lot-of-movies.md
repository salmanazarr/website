---
title: I watch a lot of movies
description: A visual inspection into my IMDb ratings using Altair
date: Jul 7 2020, 23:29 -0700
updated: Aug 6 2020, 17:22 -0700
area: ref
cat: data
---

For better or for worse, I have watched [over 800 titles](/kb/movies--tv). It
seems natural to put that data to good use, at least academically. This
post is written, in expectation, to mainly serve three purposes -

1. a way for me to ask as many questions as possible on a simple dataset to keep
   the creative juices flowing

2. to keep thinking about informative ways to visualize data ubiquitous around us

3. a quick reference for [Altair](https://altair-viz.github.io), a declarative
   charting library

## Data

IMDb allows users to rate every movie or a TV show on a scale of 1 to 10,
restricted to integer ratings. Conveniently, it also collects them into a
[list](https://www.imdb.com/user/ur34765497/ratings) which I have made public.

I wrote a tiny web spider using [Playwright](https://playwright.dev) which
collects some basic information - title, release year, genres, ratings (including
mine) and total number of votes, into a CSV file. The code and data is available at [activatedgeek/imdb-ratings](https://github.com/activatedgeek/imdb-ratings). It is a pretty
straightforward set of CSS path selectors. I do some further organization in
a [Jupyter notebook](https://github.com/activatedgeek/imdb-ratings/blob/master/notebooks/IMDb%20Analysis.ipynb)
using [Pandas](https://pandas.pydata.org) `DataFrames` to make charting easier.

My rule of thumb to store or organize data is to do it in a format I would design
for a typical relational database. All downstream analysis can then be pretty much
summarized via operations in relational algebra - Cartesian product, projection,
selection, union and difference. More SQL-esque notions would be the operations of table merge and join.

## Questions

This is a list of questions I've thought of visualizing so far for a qualitative
inspection of the statistics.

_Do not forget to scroll as some charts may be larger than they appear_.

### Count based

#### Movies watched by release year

```vega
specUrl: /vega/hist_year.alt.json
```

#### Genre heatmap by release year

```vega
specUrl: /vega/heatmap_genre.alt.json
```

### Votes based

#### Distribution of votes

```vega
specUrl: /vega/hist_votes.alt.json
```

#### Distribution of votes by year

```vega
specUrl: /vega/hist_votes_year.alt.json
```

### Ratings based

#### Distribution over all ratings

```vega
specUrl: /vega/ratings.alt.json
```

#### Distribution by release year

```vega
specUrl: /vega/ratings_year.alt.json
```

#### Distribution by genre

```vega
specUrl: /vega/ratings_genre.alt.json
```
