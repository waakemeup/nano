// fixes an issue in std@0.80.0 (deno)
// interface ReadableStream<R> {
//   getIterator(): any
// }

declare var _nano: {
  document: Document
  isSSR: true | undefined
  location: { pathname: string }
  customElements: Map<string, any>
  ssrTricks: {
    isWebComponent: (tagNameOrComponent: any) => boolean
    renderWebComponent: (tagNameOrComponent: any, props: any, children: any, _render: any) => any
  }
}

declare namespace Deno {}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
  interface ElementClass {
    render: any
  }
  interface ElementChildrenAttribute {
    children: any
  }
}
