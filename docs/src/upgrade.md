---
outline: deep
title: Upgrade - v4
description: Detailed guide on how to upgrade Timeago from v3 to v4
---

# Upgrade Guide: v3 to v4
Timeago `v4` is a major release that introduces some potential breaking changes that might not even effect you. This guide will help you transition from `v3` to `v4` smoothly.

## Breaking Changes
- **Update package namespace**. Changed package namespace to `github.com/SerhiiCho/timeago/v4`

## Upgrade Steps

### Step 1: Update Package Namespace
Using your editor's find and replace functionality, update the package namespace:

```go
import "github.com/SerhiiCho/timeago/v3" // [!code --]
import "github.com/SerhiiCho/timeago/v4" // [!code ++]
```

### Step 2: Update Dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file.

```bash
go mod tidy
```