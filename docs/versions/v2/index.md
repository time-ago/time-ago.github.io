---
outline: deep
search: false
title: Guide - v2
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Guide
To read about the library, visit the [What is Timeago?](/v2/what-is-timeago) page.

## Quick Start
Library versioning follows the Go Modules versioning. To get the latest version of the library, run the following command:

```bash
go get -u github.com/SerhiiCho/timeago/v2
```

## Usage
Pass the date to the `timeago.Parse()` function. It calculates the interval between the current datetime and the given datetime, returning a parsed string in the format `x time ago`. The library can work with both past and future dates. The usage is straightforward.

### Allowed types
The `timeago.Parse()` function accepts different types of datetime:

- `int` Unix timestamp
- `time.Time` Type from Go time package
- `string` Datetime string in format `YYYY-MM-DD HH:MM:SS`

> Any other type will trigger a panic.

```go
timeago.Parse("2019-10-23 10:46:00") // string date
timeago.Parse(time.Now()) // time.Time
timeago.Parse(1642607826) // Unix timestamp
```

### Usage with dates in the past
```go
pastDate := time.Now().Add(-time.Hour)

res := timeago.Parse(pastDate)

fmt.Println(res) // 1 hour ago
```

### Usage with dates in the future
Future dates are also supported. The library will return the correct string without the word `ago`.

```go
pastDate := time.Now().Add(time.Hour * 2)

res := timeago.Parse(pastDate)

fmt.Println(res) // 2 hours
```