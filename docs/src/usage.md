---
outline: deep
title: Usage Guide - v4
description: Learn how to quickly get started with the Timeago library
---

# Usage Guide
Pass the date into the `timeago.Parse()` function. It calculates the interval between the current datetime and the given datetime, returning a parsed string in the format `x time ago`. The library can work not only with dates in the past but future dates as well. The usage is pretty straight forward.

### Allowed types
The `timeago.Parse()` function accepts different types of datetime and returns the result and an error. The allowed inputs are:

- Unix timestamp: `int`, `int64`, `int32`, `uint`, `uint64`, `uint32`, `string`
    - Example: `1642607826`
- Type from Go time package: `time.Time`
    - Example: `time.Now()`
- Datetime string in format `YYYY-MM-DD HH:MM:SS`
    - Example: `2019-10-23 10:46:11`

Any other types or formats passed to the `Parse` function will return an error!

### How Dates Are Converted
Timeago picks the largest unit that fits the time difference. Values are floored, not rounded, so `23 hours 59 minutes` becomes `23 hours ago` and `6 days 23 hours` becomes `6 days ago`.

| Time difference | Unit |
| --- | --- |
| Less than 60 seconds | seconds |
| Less than 60 minutes | minutes |
| Less than 24 hours | hours |
| Less than 7 days | days |
| Less than 4 weeks | weeks |
| Less than 12 months | months |
| 12 months or more | years |

::: info Calendar months and years
Months and years are calculated using calendar boundaries instead of fixed 30- and 365-day durations. For example, January 31 to February 28 counts as `1 month`, and February 29 to February 28 next year counts as `1 year`.
:::

### Date in the Past
If you pass a date in the past, Timeago will return output containing the word `ago`, indicating that the date is in the past. Unless you specify the `noSuffix` option. Read [here](/options.html#available-options) about options and how to use them.

```go
import (
	"fmt"
	"time"

	"github.com/SerhiiCho/timeago/v4"
)

func main() {
	pastDate := time.Now().Add(-time.Minute * 5)
	out, err := timeago.Parse(pastDate)

	if err != nil {
		// handle error
	}

	fmt.Println(out) // Output: "5 minutes ago"
}
```

### Date in the Future
Future dates are also supported. Timeago will return the correct string without the word `ago` when the date is in the future.

```go
import (
	"fmt"
	"time"

	"github.com/SerhiiCho/timeago/v4"
)

func main() {
    pastDate := time.Now().Add(time.Hour * 2)
    res, err := timeago.Parse(pastDate)

    if err != nil {
        // handle error
    }

    fmt.Println(res) // Output: "2 hours"
}
```
