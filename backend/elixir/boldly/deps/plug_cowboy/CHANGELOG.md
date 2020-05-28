# Changelog

## v2.2.1

### Enhancements

  * Use proper telemetry metadata for exceptions

## v2.2.0

### Enhancements

  * Include telemetry support

## v2.1.3

### Bug fixes

  * Properly support the :options option before removal

## v2.1.2

### Bug fixes

  * Properly deprecate the :timeout option before removal

## v2.1.1

### Enhancement

  * Improve docs and simplify child spec API

## v2.1.0

### Enhancement

  * Add `Plug.Cowboy.Drainer` for connection draining

## v2.0.2

### Enhancements

  * Unwrap `Plug.Conn.WrapperError` on handler error
  * Include `crash_reason` as logger metadata

## v2.0.1

### Bug fixes

  * Respect `:read_length` and `:read_timeout` in `read_body` with Cowboy 2

## v2.0.0

Extract `Plug.Adapters.Cowboy2` from Plug into `Plug.Cowboy`
