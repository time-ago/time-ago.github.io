---
outline: deep
search: false
title: Options - v2
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Options
As the second argument, the `Parse()` function accepts strings. Here is an example of a passed option.

## Example with one option
```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online") // Online
timeago.Parse(currentTime, "justNow") // Just now
timeago.Parse(hourAgo, "noSuffix") // 1 hour
```

## Example with multiple options
```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online", "noSuffix") // Online
timeago.Parse(hourAgo, "online", "noSuffix") // 1 hour
```

## Available options
| Option | Description |
| --- | --- |
| `online` | Displays **Online** if the date interval is within 60 seconds. For example, instead of `13 seconds ago` it prints `Online` |
| `justNow` | Displays **Just now** if the date interval is within 60 seconds. For example, instead of `32 seconds ago` it prints `Just now`. |
| `noSuffix` | Removes the suffix from the datetime result. For example, instead of `5 minutes ago` it returns `5 minutes`. |