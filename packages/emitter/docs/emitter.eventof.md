<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rocket.chat/emitter](./emitter.md) &gt; [EventOf](./emitter.eventof.md)

## EventOf type


<b>Signature:</b>

```typescript
export declare type EventOf<EventMap extends DefaultEventMap, EventType extends AnyEventTypeOf<EventMap>> = EventMap[EventType] extends void ? never : EventMap[EventType];
```
<b>References:</b> [DefaultEventMap](./emitter.defaulteventmap.md)<!-- -->, [AnyEventTypeOf](./emitter.anyeventtypeof.md)
