'use client'

import log from 'loglevel'

import { bus, BusEvents } from './event-bus'

export class ErrorHandler {
  static process(error: unknown, message = ''): void {
    if (!(error instanceof Error)) return

    bus.emit(BusEvents.Error, { error, message })

    ErrorHandler.processWithoutFeedback(error)
  }

  static processWithoutFeedback(error: Error): void {
    log.error(error)
  }
}
