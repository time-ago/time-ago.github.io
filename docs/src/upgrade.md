---
outline: deep
title: Upgrade - v4
description: Detailed guide on how to upgrade Timeago from v3 to v4
---

# Upgrade Guide: v3 to v4
Timeago `v4` is a major release that introduces some potential breaking changes that might not even effect you. This guide will help you transition from `v3` to `v4` smoothly.

## Breaking Changes
- Changed package namespace to `github.com/SerhiiCho/timeago/v4`
- Remove support for Go version `1.20`.
- `Parse()` now returns an error for `uint` and `uint64` timestamps greater than `math.MaxInt64` instead of silently wrapping to negative dates. Closes [#52](https://github.com/SerhiiCho/timeago/issues/52).
- `Parse()` now returns an error for invalid datetime strings instead of silently using the zero time and producing results like `292 years ago` which are misleading. Closes [#50](https://github.com/SerhiiCho/timeago/issues/50).

## Upgrade Steps

### Step 1: Update Package Namespace
Using your editor's find and replace functionality, update the package namespace:

```go
import "github.com/SerhiiCho/timeago/v3" // [!code --]
import "github.com/SerhiiCho/timeago/v4" // [!code ++]
```

### Step 2: Update Go Version
Version `v4` no longer supports Go `1.20`. Bump the Go version in your `go.mod` file to `1.21` or higher:

```go
go 1.20 // [!code --]
go 1.21 // [!code ++]
```

### Step 3: Update Dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file.

```bash
go mod tidy
```

### Step 4: Handle Out-of-Range `uint` and `uint64` Timestamps
Previously, `uint` and `uint64` timestamps greater than `math.MaxInt64` were silently converted to negative dates. Now the `Parse` function returns an error instead. Make sure you handle it:

```go
out, err := timeago.Parse(uint64(math.MaxInt64) + 1)
if err != nil {
    log.Fatalln(err) // [Timeago]: timestamp 9223372036854775808 overflows int64
}

fmt.Println(out)
```

### Step 5: Handle Invalid Datetime Strings
Previously, invalid datetime strings silently fell back to the zero time, producing misleading results like `292 years ago`. Now the `Parse` function returns an error. Make sure you handle it:

```go
out, err := timeago.Parse("not a date")
if err != nil {
    log.Fatalln(err) // [Timeago]: parsing time "not a date" as "2006-01-02 15:04:05": ...
}

fmt.Println(out)
```
