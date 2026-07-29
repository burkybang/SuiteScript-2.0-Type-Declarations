/// <reference path="./error.d.ts" />

/**
 * SuiteScript xml module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344917661}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344917661.html}
 * @module N/xml
 * @NApiVersion 2.x
 */
interface xml {

  /**
   * Encapsulates the functionality used by NetSuite to parse an XML document
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344922681}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344922681.html}
   *
   * @since 2015.2
   */
  Parser: xml.Parser;

  /**
   * Encapsulates the functionality to run XPath expressions
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344925104}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344925104.html}
   *
   * @since 2015.2
   */
  XPath: xml.XPath;

  escape: {

    /**
     * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392331185}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392331185.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.xmlText the XML text to be escaped
     * @return the escaped XML
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if xmlText is missing or null
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if xmlText is not a string
     */
    (options: {
      xmlText: string,
    }): string;

    /**
     * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392331185}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392331185.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param xmlText the XML text to be escaped
     * @return the escaped XML
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if xmlText is missing or null
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if xmlText is not a string
     */
    (
      xmlText: string,
    ): string;
  };

  /**
   * Validates a supplied XML document against a supplied XML Schema (XSD Document)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345173468}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345173468.html}
   *
   * @governance none
   * @restriction Server-side scripts only
   * @since 2015.2
   *
   * @param options
   * @param options.xml the XML document object
   * @param options.xsdFilePathOrId ID or path to the XSD file to validate the XML object against
   * @param [options.importFolderPathOrId] ID or path to a folder in the file cabinet containing additional XSD schemas which are imported by the parent XSD provided via "xsdFilePathOrId"
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if xml or xsdFilePathOrId is missing or null
   * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if xml is not an xml.Document (or other XML node)
   * @throws {error.SuiteScriptError} INSUFFICIENT_PERMISSION if xsdFilePathOrId is a file ID that does not exist or is not accessible
   * @throws {error.SuiteScriptError} RCRD_DSNT_EXIST if xsdFilePathOrId is a file path that does not resolve to an existing file
   * @throws {error.SuiteScriptError} ILLEGAL_REQUEST_FOR_A_FILE_THAT_ISNT_DOWNLOADABLE if the referenced XSD file is not downloadable
   * @throws {error.SuiteScriptError} SSS_INVALID_XML_SCHEMA_OR_DEPENDENCY if schema is an incorrectly structured XSD, or a dependent schema could not be found
   * @throws {error.SuiteScriptError} SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA if XML provided is invalid with respect to the provided schema
   */
  validate(options: {
    xml: xml.Document,
    xsdFilePathOrId: number | string,
    importFolderPathOrId?: number | string,
  }): void;
}

declare namespace xml {

  /**
   * Enum that holds the string values for the supported node types.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345174049}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345174049.html}
   *
   * @enum {string}
   */
  export enum NodeType {
    ELEMENT_NODE = 'ELEMENT_NODE',
    ATTRIBUTE_NODE = 'ATTRIBUTE_NODE',
    TEXT_NODE = 'TEXT_NODE',
    CDATA_SECTION_NODE = 'CDATA_SECTION_NODE',
    ENTITY_REFERENCE_NODE = 'ENTITY_REFERENCE_NODE',
    ENTITY_NODE = 'ENTITY_NODE',
    PROCESSING_INSTRUCTION_NODE = 'PROCESSING_INSTRUCTION_NODE',
    COMMENT_NODE = 'COMMENT_NODE',
    DOCUMENT_NODE = 'DOCUMENT_NODE',
    DOCUMENT_TYPE_NODE = 'DOCUMENT_TYPE_NODE',
    DOCUMENT_FRAGMENT_NODE = 'DOCUMENT_FRAGMENT_NODE',
    NOTATION_NODE = 'NOTATION_NODE',
  }

  /**
   * XML Parser Object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344922681}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344922681.html}
   * @protected
   * @constructor
   */
  export interface Parser {

    fromString: {

      /**
       * Generate XML Document object from a string
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924195}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924195.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param text XML text
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if text is missing or null
       * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if text is not well-formed XML
       */
      (
        text: string,
      ): Document;

      /**
       * Generate XML Document object from a string
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924195}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924195.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.text XML text
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if text is missing or null
       * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if text is not well-formed XML
       */
      (options: {
        text: string,
      }): Document;
    };

    toString: {

      /**
       * Generate a String from an XML Document object
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924636}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924636.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param options
       * @param options.document XML Document object
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if document is missing or null
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if document is not an xml.Document
       */
      (options: {
        document: Document,
      }): string;

      /**
       * Generate a String from an XML Document object
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924636}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924636.html}
       *
       * @governance none
       * @restriction Client-side and server-side scripts
       * @since 2015.2
       *
       * @param document XML Document object
       *
       * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if document is missing or null
       * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if document is not an xml.Document
       */
      (
        document: Document,
      ): string;
    };
  }

  /**
   * XPath Query Object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344925104}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344925104.html}
   */
  export interface XPath {

    /**
     * Returns an Array of Nodes matching the provided XPath expression.
     *
     * A malformed XPath expression is not reported as a parse error; it surfaces at runtime as a generic UNEXPECTED_ERROR.
     * An XPath that selects attributes (e.g. `//@id`) returns Attr nodes; these expose `name`/`value` but their Node properties (nodeType, nodeName, etc.) read `undefined`.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344925105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344925105.html}
     *
     * @governance none
     * @restriction Client-side and server-side scripts
     * @since 2015.2
     *
     * @param options
     * @param options.xpath an XPath expression
     * @param options.node XML node being queried
     * @return nodes associated with the current result
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if xpath or node is missing or null
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if node is not an XML node
     */
    select(options: {
      xpath: string,
      node: Node | Element | Document,
    }): (Node | Element | Attr)[];
  }

  /**
   * Return a new instance of XML Node
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4346057759}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4346057759.html}
   * @constructor
   *
   * @since 2015.2
   *
   * @classDescription Encapsulation of W3C DOM Node
   */
  export interface Node {

    /**
     * A map of key/value (string->Attr) pairs containing the attributes of this node (if it is an Element) or null otherwise
     * Map keys replace the colon of a qualified attribute name with an underscore (e.g. `p:lang` is keyed as `p_lang`, `xmlns:x` as `xmlns_x`); the Attr's own `name` property keeps the real qualified name (`p:lang`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46127868652}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46127868652.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly attributes: {
      [p: string]: Attr,
    } | null;

    /**
     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459509521483}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459509521483.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly baseURI: string | null;

    /**
     * An array of all children of this node. If there are no children, this is an empty array.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459823547362}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459823547362.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly childNodes: (Node | Element)[];

    /**
     * The first child of this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460666442870}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460666442870.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly firstChild: Node | Element | null;

    /**
     * The last child of this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457311035155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457311035155.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly lastChild: Node | Element | null;

    /**
     * The local part of the qualified name of this node, or null for nodes that have no local name (e.g. text, comment, CDATA, and document nodes)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460875793456}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460875793456.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly localName: string | null;

    /**
     * The namespace URI of this node, or null if it is unspecified
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456845336913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456845336913.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly namespaceURI: string | null;

    /**
     * The node immediately following this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455924011229}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455924011229.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly nextSibling: Node | Element | null;

    /**
     * The name of this node, depending on its type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458950439452}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458950439452.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly nodeName: string;

    /**
     * The type of the underlying object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456552673339}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456552673339.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly nodeType: NodeType | `${NodeType}`;

    /**
     * The value of this node, depending on its type. Null for nodes (such as elements and documents) that have no value; setting it on those nodes has no effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454531188964}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454531188964.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    nodeValue: string | null;

    /**
     * The Document object associated with this node, or null for the Document node itself
     * This is also the Document object used to create new nodes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458963562010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458963562010.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly ownerDocument: Document | null;

    /**
     * The parent of this node, or null if there is no parent (e.g. the Document node, or a node not yet attached to a tree)
     * All nodes, except Attr, Document, DocumentFragment, Entity, and Notation may have a parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46910644531}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46910644531.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly parentNode: Node | Element | Document | null;

    /**
     * The namespace prefix of this node, or null if it is unspecified
     * When it is defined to be null, setting it has no effect, including if the node is read-only.
     * Writable at runtime, though the Help Center lists this property as read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460653930663}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460653930663.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to set the property value
     */
    prefix: string | null;

    /**
     * The node immediately preceding this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46856323242}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46856323242.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly previousSibling: Node | Element | null;

    /**
     * This attribute returns the text content of this node and its descendants. Null for nodes (such as the document node) that have no text content; setting it on those nodes has no effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458147827147}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458147827147.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    textContent: string | null;

    /**
     * Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.
     *
     * DOM-level violations (for example, appending a node created by a different document) surface at runtime as a raw `org.w3c.dom.DOMException` (e.g. WRONG_DOCUMENT_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459708190917}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459708190917.html}
     *
     * @governance none
     *
     * @param options
     * @param options.newChild the node to add
     * @return the node added
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if newChild is missing or null
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be appended for some reason
     */
    appendChild<NewChildNode extends (Node | Element)>(options: {
      newChild: NewChildNode,
    }): NewChildNode;

    /**
     * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes. The duplicate node has no parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46211181640}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46211181640.html}
     *
     * @governance none
     *
     * @param options
     * @param options.deep if true, recursively clone the subtree under the specified node; if false, clone only the node itself (and its attributes, if it is an Element)
     * @return the duplicate node
     */
    cloneNode(options: {
      deep: boolean
    }): Node | Element;

    /**
     * Compares the reference node, i.e. the node on which this method is being called, with a node, i.e. the one passed as a parameter,
     * with regard to their position in the document and according to the document order.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460349365233}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460349365233.html}
     *
     * @governance none
     *
     * @param options
     * @param options.other the node to compare against the reference node
     * @return how the node is positioned relatively to the reference node
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION when the nodes cannot be compared
     */
    compareDocumentPosition(options: {
      other: Node | Element,
    }): number;

    /**
     * Returns whether this node (if it is an Element) has any attributes
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460054565428}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460054565428.html}
     *
     * @governance none
     *
     * @return true if this node has any attributes, false otherwise
     */
    hasAttributes(): boolean;

    /**
     * Returns whether this node has any children
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453459411620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453459411620.html}
     *
     * @governance none
     *
     * @return true if this node has any children, false otherwise
     */
    hasChildNodes(): boolean;

    /**
     * Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children.
     * If the newChild is already in the tree, it is first removed.
     *
     * DOM-level violations (for example, inserting a node created by a different document) surface at runtime as a raw `org.w3c.dom.DOMException` (e.g. WRONG_DOCUMENT_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452156005859}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452156005859.html}
     *
     * @governance none
     *
     * @param options
     * @param options.newChild the node to insert
     * @param [options.refChild] the reference node, i.e., the node before which the new node will be inserted; if null or omitted, newChild is appended at the end of the list of children
     * @return the node being inserted
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if newChild is missing or null
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be inserted for some reason
     */
    insertBefore<NewChildNode extends (Node | Element)>(options: {
      newChild: NewChildNode,
      refChild?: Node | Element | null,
    }): NewChildNode;

    /**
     * This method checks if the specified namespaceURI is the default namespace or not
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46175476074}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46175476074.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI to look for
     * @return true if the specified namespaceURI is the default namespace, false otherwise
     */
    isDefaultNamespace(options: {
      namespaceURI: string,
    }): boolean;

    /**
     * Tests whether two nodes are equal.
     * This method tests for equality of nodes, not sameness (i.e., whether the two nodes are references to the same object) which can be tested
     * with Node.isSameNode(). All nodes that are the same will also be equal, though the reverse may not be true.
     * Two nodes are equal if and only if the following conditions are satisfied:
     * - The two nodes are of the same type.
     * - The following string attributes are equal: nodeName, localName, namespaceURI, prefix, nodeValue
     * - The attributes maps are equal
     * - The childNodes lists are equal
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453230529784}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453230529784.html}
     *
     * @governance none
     *
     * @param options
     * @param options.other the node to compare equality with
     * @return true if the nodes are equal, false otherwise
     */
    isEqualNode(options: {
      other: Node | Element | Document,
    }): boolean;

    /**
     * Returns whether this node is the same node as the given one.
     * This method provides a way to determine whether two Node references returned by the implementation reference the same object.
     * When two Node references are references to the same object, even if through a proxy, the references may be used completely interchangeably,
     * such that all attributes have the same values and calling the same DOM method on either reference always has exactly the same effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454356628417}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454356628417.html}
     *
     * @governance none
     *
     * @param options
     * @param options.other the node to test against
     * @return true if the nodes are the same, false otherwise
     */
    isSameNode(options: {
      other: Node | Element | Document,
    }): boolean;

    /**
     * Look up the namespace URI associated to the given prefix, starting from this node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46200805664}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46200805664.html}
     *
     * @governance none
     *
     * @param options
     * @param options.prefix the prefix to look for; if this parameter is null, the method will return the default namespace URI if any
     * @return the associated namespace URI or null if none is found
     */
    lookupNamespaceURI(options: {
      prefix: string | null,
    }): string | null;

    /**
     * Look up the prefix associated to the given namespace URI, starting from this node.
     * The default namespace declarations are ignored by this method.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456616149901}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456616149901.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI to look for
     * @return an associated namespace prefix if found or null if none is found; if more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent
     */
    lookupPrefix(options: {
      namespaceURI: string,
    }): string | null;

    /**
     * Puts all Text nodes in the full depth of the sub-tree underneath this Node, including attribute nodes, into a "normal" form
     * where only structure (e.g., elements, comments, processing instructions, CDATA sections, and entity references) separates
     * Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457614685057}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457614685057.html}
     *
     * @governance none
     *
     */
    normalize(): void;

    /**
     * Removes the child node indicated by oldChild from the list of children, and returns it
     *
     * Removing a node that is not a child of this node surfaces at runtime as a raw `org.w3c.dom.DOMException` (NOT_FOUND_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454751220702}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454751220702.html}
     *
     * @governance none
     *
     * @param options
     * @param options.oldChild the node being removed
     * @return the node removed
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if oldChild is missing or null
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be removed for some reason
     */
    removeChild<OldChildNode extends (Node | Element)>(options: {
      oldChild: OldChildNode,
    }): OldChildNode;

    /**
     * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node
     * If the newChild is already in the tree, it is first removed.
     *
     * Returns the replaced (old) child node, not the new one.
     * DOM-level violations (for example, replacing a node that is not a child of this node, or supplying a newChild created by a different document) surface at runtime as a raw `org.w3c.dom.DOMException` (e.g. NOT_FOUND_ERR, WRONG_DOCUMENT_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456990295409}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456990295409.html}
     *
     * @governance none
     *
     * @param options
     * @param options.newChild the new node to put in the child list
     * @param options.oldChild the node being replaced in the list
     * @return the node replaced
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if newChild or oldChild is missing or null
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be replaced for some reason
     */
    replaceChild<OldChildNode extends (Node | Element)>(options: {
      newChild: Node | Element,
      oldChild: OldChildNode,
    }): OldChildNode;
  }

  /**
   * Return a new instance of XML Document
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392323653}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392323653.html}
   * @constructor
   *
   * @since 2015.2
   *
   * @classDescription Encapsulation of W3C DOM Document
   */
  export interface Document extends Element {

    /**
     * The Document Type Declaration associated with this document, or null if there is none
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454703308105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454703308105.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly doctype: Element | null;

    /**
     * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452410827636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452410827636.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly documentElement: Element;

    /**
     * The location of the document or null if undefined
     * Null at runtime; setting it has no effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455008483886}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455008483886.html}
     */
    documentURI: string | null;

    /**
     * An attribute specifying the encoding used for this document at the time of the parsing
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452187744140}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452187744140.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly inputEncoding: string;

    /**
     * An attribute specifying, as part of the XML declaration, the encoding of this document, or null if no encoding is specified in the XML declaration
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453554931640}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453554931640.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly xmlEncoding: string | null;

    /**
     * An attribute specifying, as part of the XML declaration, whether this document is standalone
     * This is false when unspecified.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459471374510}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459471374510.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlStandalone: boolean;

    /**
     * An attribute specifying, as part of the XML declaration, the version number of this document
     * Writable at runtime, though the Help Center lists this property as read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460908752440}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460908752440.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlVersion: string;

    /**
     * Attempts to adopt a node from another document to this document. If supported, it changes the ownerDocument
     * of the source node, its children, as well as the attached attribute nodes if there are any. If the source
     * node has a parent it is first removed from the child list of its parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453612609863}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453612609863.html}
     *
     * @governance none
     *
     * @param options
     * @param options.source the node to move into this document
     * @return the adopted node, or null if this operation fails, such as when the source node comes from a different implementation
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be adopted for some reason
     */
    adoptNode<SourceNode extends (Node | Element)>(options: {
      source: SourceNode,
    }): SourceNode;

    /**
     * Creates an attribute node of the given name
     *
     * An invalid name surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456575866698}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456575866698.html}
     *
     * @governance none
     *
     * @param options
     * @param options.name the name of the attribute
     * @param [options.value] the value of the attribute; if omitted, the value of the attribute will be empty string
     * @return new attribute node object with name and attribute value set as expected and localName, prefix, and namespaceURI set to null
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttribute(options: {
      name: string,
      value?: string,
    }): Attr;

    /**
     * Creates an attribute of the given qualified name and namespace URI
     *
     * An invalid qualifiedName surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452244812011}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452244812011.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to create; can be null
     * @param options.qualifiedName the qualified name of the attribute to instantiate
     * @param [options.value] the value of the attribute; if omitted, the value of the attribute will be empty string
     * @return new attribute node object with name, attribute value, namespaceURI, prefix and localName set accordingly
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttributeNS(options: {
      namespaceURI: string | null,
      qualifiedName: string,
      value?: string,
    }): Attr;

    /**
     * Creates a CDATASection node whose value is the specified string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46463562011}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46463562011.html}
     *
     * @governance none
     *
     * @param options
     * @param options.data the data for the CDATASection contents
     * @return the new CDATASection node
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the CDATASection node cannot be created
     */
    createCDATASection(options: {
      data: string,
    }): Node;

    /**
     * Creates a Comment node given the specified string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460454650877}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460454650877.html}
     *
     * @governance none
     *
     * @param options
     * @param options.data the data for the node
     * @return the new Comment node
     */
    createComment(options: {
      data: string,
    }): Node;

    /**
     * Creates an empty DocumentFragment object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457661987304}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457661987304.html}
     *
     * @governance none
     *
     * @return a new DocumentFragment
     */
    createDocumentFragment(): Node;

    /**
     * Creates an element of the type specified
     *
     * An invalid tagName surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452954040527}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452954040527.html}
     *
     * @governance none
     *
     * @param options
     * @param options.tagName the name of the element type to instantiate; for XML, this is case-sensitive
     * @return a new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElement(options: {
      tagName: string,
    }): Element;

    /**
     * Creates an element of the given qualified name and namespace URI
     *
     * An invalid qualifiedName surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458257690428}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458257690428.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the element to create; can be null
     * @param options.qualifiedName the qualified name of the element type to instantiate
     * @return a new Element object with the nodeName, localName, prefix, and namespaceURI set accordingly
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElementNS(options: {
      namespaceURI: string | null,
      qualifiedName: string,
    }): Element;

    /**
     * Creates a ProcessingInstruction node given the specified name and data strings
     *
     * An invalid target surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453675170898}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453675170898.html}
     *
     * @governance none
     *
     * @param options
     * @param options.target the target part of the processing instruction
     * @param options.data the data for the node
     * @return the new ProcessingInstruction object
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the ProcessingInstruction node cannot be created
     */
    createProcessingInstruction(options: {
      target: string,
      data: string,
    }): Node;

    /**
     * Creates a Text node given the specified string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458155761718}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458155761718.html}
     *
     * @governance none
     *
     * @param options
     * @param options.data the data for the node
     * @return the new Text node
     */
    createTextNode(options: {
      data: string
    }): Node;

    /**
     * Returns the Element that has an attribute of type ID with the given value
     *
     * Only attributes explicitly declared as type ID (via a DTD `<!ATTLIST ... ID>` declaration) are recognized — an attribute merely named `id` does not qualify, so this is rarely usable against typical NetSuite XML. On a match it returns the Element. Unlike the W3C DOM spec, it does NOT return null when there is no match: at runtime every not-found case (including documents with no ID-typed attributes) throws SSS_MISSING_REQD_ARGUMENT referencing an internal `xmlelem` argument.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458778015135}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458778015135.html}
     *
     * @governance none
     *
     * @param options
     * @param options.elementId the unique id value for an element
     * @return the matching Element
     *
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if elementId is not a string
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if no element with a matching ID-typed attribute is found — NetSuite throws this (surfacing as an internal `xmlelem` argument) instead of returning null
     */
    getElementById(options: {
      elementId: string
    }): Element;

    /**
     * Returns an array of all the Elements with a given tag name in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457710510253}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457710510253.html}
     *
     * @governance none
     *
     * @param options
     * @param options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @return an array containing all the matched Elements
     */
    getElementsByTagName(options: {
      tagName: string
    }): Element[];

    /**
     * Returns an array of all the Elements with a given local name and namespace URI in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460907836913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460907836913.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @return an array containing all the matched Elements
     */
    getElementsByTagNameNS(options: {
      namespaceURI: string,
      localName: string,
    }): Element[];

    /**
     * Imports a node from another document to this document without altering or removing the source node from the original document
     * This method creates a new copy of the source node.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457609802245}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457609802245.html}
     *
     * @governance none
     *
     * @param options
     * @param options.importedNode the node to import
     * @param options.deep if true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above
     * @return the imported node that belongs to this Document
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be imported for some reason
     */
    importNode<ImportedNode extends (Node | Element)>(options: {
      importedNode: ImportedNode,
      deep: boolean,
    }): ImportedNode;
  }

  /**
   * Return a new instance of XML Element
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345167426}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345167426.html}
   * @constructor
   *
   * @since 2015.2
   *
   * @classDescription Encapsulation of W3C DOM Element
   */
  export interface Element extends Node {

    /**
     * The name of the element
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458841796874}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458841796874.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly tagName: string;

    getAttribute: {

      /**
       * Retrieves an attribute value by name
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457730651854}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457730651854.html}
       *
       * @governance none
       *
       * @param name the name of the attribute to retrieve
       * @return the Attr value as a string, or the empty string if that attribute does not have a specified or default value
       */
      (
        name: string,
      ): string;

      /**
       * Retrieves an attribute value by name
       * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457730651854}
       * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457730651854.html}
       *
       * @governance none
       *
       * @param options
       * @param options.name the name of the attribute to retrieve
       * @return the Attr value as a string, or the empty string if that attribute does not have a specified or default value
       */
      (options: {
        name: string,
      }): string;
    };

    /**
     * Retrieves an attribute node by name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4588427395}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4588427395.html}
     *
     * @governance none
     *
     * @param options
     * @param options.name the name of the attribute to retrieve
     * @return the Attr node with the specified name or null if there is no such attribute
     */
    getAttributeNode(options: {
      name: string,
    }): Attr | null;

    /**
     * Retrieves an attribute node by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452000061035}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452000061035.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param options.localName the local name of the attribute to retrieve
     * @return the Attr node with the specified attribute local name and namespace URI or null if there is no such attribute
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    getAttributeNodeNS(options: {
      namespaceURI: string | null,
      localName: string,
    }): Attr | null;

    /**
     * Retrieves an attribute value by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453436523437}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453436523437.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param options.localName the local name of the attribute to retrieve
     * @return the Attr value as a string, or the empty string if that attribute does not have a specified or default value
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    getAttributeNS(options: {
      namespaceURI: string | null,
      localName: string,
    }): string;

    /**
     * Returns an array of all descendant Elements with a given tag name, in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452163024902}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452163024902.html}
     *
     * @governance none
     *
     * @param options
     * @param options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @return an array of matching Element nodes
     */
    getElementsByTagName(options: {
      tagName: string,
    }): Element[];

    /**
     * Returns an array of all descendant Elements with a given local name and namespace URI in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454667602538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454667602538.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @return an array of matching Element nodes
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the elements cannot be retrieved for some reason
     */
    getElementsByTagNameNS(options: {
      namespaceURI: string,
      localName: string,
    }): Element[];

    /**
     * Returns true when an attribute with a given name is specified on this element or has a default value, false otherwise
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453276306152}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453276306152.html}
     *
     * @governance none
     *
     * @param options
     * @param options.name the name of the attribute to look for
     * @return true if an attribute with the given name is specified on this element or has a default value, false otherwise
     */
    hasAttribute(options: {
      name: string,
    }): boolean;

    /**
     * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458537536620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458537536620.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to look for; can be null
     * @param options.localName the local name of the attribute to look for
     * @return true if an attribute with the given local name and namespace URI is specified or has a default value on this element, false otherwise
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the command cannot be performed for some reason
     */
    hasAttributeNS(options: {
      namespaceURI: string | null,
      localName: string,
    }): boolean;

    /**
     * Removes an attribute by name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457329345702}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457329345702.html}
     *
     * @governance none
     *
     * @param options
     * @param options.name the name of the attribute to remove
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    removeAttribute(options: {
      name: string,
    }): void;

    /**
     * Removes the specified attribute node
     *
     * Removing an Attr that is not on this element surfaces at runtime as a raw `org.w3c.dom.DOMException` (NOT_FOUND_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454500366210}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454500366210.html}
     *
     * @governance none
     *
     * @param options
     * @param options.oldAttr the Attr node to remove from the attribute list
     * @return the Attr node that was removed
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    removeAttributeNode<OldAttr extends Attr>(options: {
      oldAttr: OldAttr,
    }): OldAttr;

    /**
     * Removes an attribute by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460859619139}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460859619139.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to remove; can be null
     * @param options.localName the local name of the attribute to remove
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    removeAttributeNS(options: {
      namespaceURI: string | null,
      localName: string,
    }): void;

    /**
     * Adds a new attribute
     * If an attribute with that name is already present in the element, its value is changed to be that of the value parameter.
     *
     * An invalid name surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455326171874}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455326171874.html}
     *
     * @governance none
     *
     * @param options
     * @param options.name the name of the attribute to create or alter
     * @param options.value value to set in string form
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttribute(options: {
      name: string,
      value: string,
    }): void;

    /**
     * Adds a new attribute node
     * If an attribute with that name is already present in the element, it is replaced by the new one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454052368163}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454052368163.html}
     *
     * @governance none
     *
     * @param options
     * @param options.newAttr the Attr node to add to the attribute list
     * @return if the newAttr attribute replaces an existing attribute, the replaced Attr node is returned, otherwise null is returned
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNode(options: {
      newAttr: Attr,
    }): Attr | null;

    /**
     * Adds a new attribute node
     * If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454328857421}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454328857421.html}
     *
     * @governance none
     *
     * @param options
     * @param options.newAttr the Attr node to add to the attribute list
     * @return if the newAttr attribute replaces an existing attribute with the same local name and namespace URI, the replaced Attr node is returned, otherwise null is returned
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNodeNS(options: {
      newAttr: Attr,
    }): Attr | null;

    /**
     * Adds a new attribute. If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed
     * to be the prefix part of the qualifiedName, and its value is changed to be the value parameter.
     *
     * An invalid qualifiedName surfaces at runtime as a raw `org.w3c.dom.DOMException` (INVALID_CHARACTER_ERR), not a wrapped error.SuiteScriptError.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456093383788}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456093383788.html}
     *
     * @governance none
     *
     * @param options
     * @param options.namespaceURI the namespace URI of the attribute to create or alter; can be null
     * @param options.qualifiedName the qualified name of the attribute to create or alter
     * @param options.value value to set in string form
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNS(options: {
      namespaceURI: string | null,
      qualifiedName: string,
      value: string,
    }): void;
  }

  /**
   * Return a new instance of XML Attr
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345169036}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345169036.html}
   * @protected
   * @constructor
   *
   * @since 2015.2
   *
   * @classDescription Encapsulation of W3C DOM Attr
   */
  export interface Attr {

    /**
     * Returns the name of this attribute
     * For a namespaced attribute this is the qualified name (e.g. `p:lang`).
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46766296386}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46766296386.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly name: string;

    /**
     * The Element node this attribute is attached to, or null if this attribute is not in use (e.g. one just created via Document.createAttribute and not yet set on an element)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46546264648}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46546264648.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly ownerElement: Element | null;

    /**
     * True if this attribute was explicitly given a value in the instance document, false otherwise
     * Read-only at runtime, although the Help Center does not mark this property read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460958801268}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460958801268.html}
     *
     * @throws {error.SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    readonly specified: boolean;

    /**
     * The attribute value. On retrieval, the value of the attribute is returned as a string. Character and general entity
     * references are replaced with their values. On setting, this creates a Text node with the unparsed contents of the string,
     * i.e. any characters that an XML processor would recognize as markup are instead treated as literal text.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46829772949}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46829772949.html}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the value cannot be set for some reason
     */
    value: string;
  }
}