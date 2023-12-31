# alertplugin

To display the alert for both android and ios platforms.

## Install

```bash
npm install alertplugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`showAlert(...)`](#showalert)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### showAlert(...)

```typescript
showAlert(options: { title?: string; message: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ title?: string; message: string; }</code> |

--------------------

</docgen-api>
