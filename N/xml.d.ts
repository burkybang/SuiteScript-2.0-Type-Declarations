/**
 * SuiteScript xml module
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344917661}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344917661.html}
 *
 * @module N/xml
 * @NApiVersion 2.x
 */
interface xml {

  /**
   * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392331185}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392331185.html}
   *
   * @param {string} options.xmlText the XML text to be escaped
   * @return {string} the escaped XML
   *
   * @since 2015.2
   */
  escape(options: {
    xmlText: string,
  }): string;

  /**
   * Validates a supplied XML document against a supplied XML Schema (XSD Document)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345173468}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345173468.html}
   *
   * @param {Document} options.xml the XML document object
   * @param {number|string} options.xsdFilePathOrId ID or path to the XSD file to validate the XML object against
   * @param {number|string} [options.importFolderPathOrId] ID or path to a folder in the file cabinet containing additional XSD schemas which are imported by the parent XSD provided via "xsdFilePathOrId"
   *
   * @throws {error.SuiteScriptError} SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA if XML provided is invalid with respect to the provided schema
   * @throws {error.SuiteScriptError} SSS_INVALID_XML_SCHEMA_OR_DEPENDENCY if schema is an incorrectly structured XSD, or a dependent schema could not be found
   * @return {void}
   *
   * @since 2015.2
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
   *
   * @protected
   * @constructor
   */
  export interface Parser {

    /**
     * Generate XML Document object from a string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924195}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924195.html}
     *
     * @param {string} options.text XML text
     * @return {Document}
     *
     * @since 2015.2
     */
    fromString(options: {
      text: string,
    }): Document;

    /**
     * Generate a String from an XML Document object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344924636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344924636.html}
     *
     * @param {Document} options.document XML Document object
     * @return {string}
     *
     * @since 2015.2
     */
    toString(options: {
      document: Document,
    }): string;
  }

  /**
   * XPath Query Object
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344925104}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344925104.html}
   */
  export interface XPath {

    /**
     * Returns an Array of Nodes matching the provided XPath expression
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4344925105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4344925105.html}
     *
     * @param {string} options.xpath an XPath expression
     * @param {Node} options.node XML node being queried
     * @return {Node[]} nodes associated with the current result
     *
     * @since 2015.2
     */
    select(options: {
      xpath: string,
      node: Node,
    }): Node[];
  }

  /**
   * Return a new instance of XML Node
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4346057759}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4346057759.html}
   *
   * @classDescription Encapsulation of W3C DOM Node
   * @return {Node}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Node {

    /**
     * Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459708190917}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459708190917.html}
     *
     * @param {Node} options.newChild the node to add
     * @return {Node} the node added
     *
     * @throws {error.SuiteScriptError} SSS_DOM_EXCEPTION if node cannot be appended for some reason
     */
    appendChild<NewChildNode extends Node>(options: {
      newChild: NewChildNode,
    }): NewChildNode;

    /**
     * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes. The duplicate node has no parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46211181640}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46211181640.html}
     *
     * @param {boolean} options.deep if true, recursively clone the subtree under the specified node; if false, clone only the node itself (and its attributes, if it is an Element)
     * @return {Node} the duplicate node
     */
    cloneNode(options: {
      deep: boolean
    }): Node;

    /**
     * Compares the reference node, i.e. the node on which this method is being called, with a node, i.e. the one passed as a parameter,
     * with regard to their position in the document and according to the document order.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460349365233}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460349365233.html}
     *
     * @param {Node} options.other the node to compare against the reference node
     * @return {number} how the node is positioned relatively to the reference node
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION when the nodes cannot be compared
     */
    compareDocumentPosition(options: {
      other: Node,
    }): number;

    /**
     * Returns whether this node (if it is an Element) has any attributes
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460054565428}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460054565428.html}
     *
     * @return {boolean} true if this node has any attributes, false otherwise
     */
    hasAttributes(): boolean;

    /**
     * Returns whether this node has any children
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453459411620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453459411620.html}
     *
     * @return {boolean} true if this node has any children, false otherwise
     */
    hasChildNodes(): boolean;

    /**
     * Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children.
     * If the newChild is already in the tree, it is first removed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452156005859}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452156005859.html}
     *
     * @param {Node} options.newChild the node to insert
     * @param {Node} options.refChild the reference node, i.e., the node before which the new node will be inserted
     * @return {Node} the node being inserted
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be inserted for some reason
     */
    insertBefore<NewChildNode extends Node>(options: {
      newChild: NewChildNode,
      refChild: Node,
    }): NewChildNode;

    /**
     * This method checks if the specified namespaceURI is the default namespace or not
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46175476074}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46175476074.html}
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @return {boolean} true if the specified namespaceURI is the default namespace, false otherwise
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
     * @param {Node} options.other the node to compare equality with
     * @return {boolean} true if the nodes are equal, false otherwise
     */
    isEqualNode(options: {
      other: Node,
    }): boolean;

    /**
     * Returns whether this node is the same node as the given one.
     * This method provides a way to determine whether two Node references returned by the implementation reference the same object.
     * When two Node references are references to the same object, even if through a proxy, the references may be used completely interchangeably,
     * such that all attributes have the same values and calling the same DOM method on either reference always has exactly the same effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454356628417}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454356628417.html}
     *
     * @param {Node} options.other the node to test against
     * @return {boolean} true if the nodes are the same, false otherwise
     */
    isSameNode(options: {
      other: Node,
    }): boolean;

    /**
     * Look up the namespace URI associated to the given prefix, starting from this node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46200805664}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46200805664.html}
     *
     * @param {string} options.prefix the prefix to look for; if this parameter is null, the method will return the default namespace URI if any
     * @return {string} the associated namespace URI or null if none is found
     */
    lookupNamespaceURI(options: {
      prefix: string,
    }): string;

    /**
     * Look up the prefix associated to the given namespace URI, starting from this node.
     * The default namespace declarations are ignored by this method.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456616149901}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456616149901.html}
     *
     * @param {string} options.namespaceURI the namespace URI to look for
     * @return {string} an associated namespace prefix if found or null if none is found; if more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent
     */
    lookupPrefix(options: {
      namespaceURI: string,
    }): string;

    /**
     * Puts all Text nodes in the full depth of the sub-tree underneath this Node, including attribute nodes, into a "normal" form
     * where only structure (e.g., elements, comments, processing instructions, CDATA sections, and entity references) separates
     * Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457614685057}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457614685057.html}
     *
     * @return {void}
     */
    normalize(): void;

    /**
     * Removes the child node indicated by oldChild from the list of children, and returns it
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454751220702}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454751220702.html}
     *
     * @param {Node} options.oldChild the node being removed
     * @return {Node} the node removed
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be removed for some reason
     */
    removeChild<OldChildNode extends Node>(options: {
      oldChild: OldChildNode,
    }): OldChildNode;

    /**
     * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node
     * If the newChild is already in the tree, it is first removed.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456990295409}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456990295409.html}
     *
     * @param {Node} options.newChild the new node to put in the child list
     * @param {Node} options.oldChild the node being replaced in the list
     * @return {Node} the node replaced
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be replaced for some reason
     */
    replaceChild<NewChildNode extends Node>(options: {
      newChild: NewChildNode,
      oldChild: Node,
    }): NewChildNode;

    /**
     * A map of key/value (string->Attr) pairs containing the attributes of this node (if it is an Element) or null otherwise
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46127868652}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46127868652.html}
     *
     * @type {Object<string, Attr>}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    attributes: {
      [p: string]: Attr,
    };

    /**
     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459509521483}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459509521483.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    baseURI: string;

    /**
     * An array of all children of this node. If there are no children, this is an empty array.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459823547362}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459823547362.html}
     *
     * @type {Node[]}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    childNodes: Node[];

    /**
     * The first child of this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460666442870}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460666442870.html}
     *
     * @type {Node}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    firstChild: Node;

    /**
     * The last child of this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457311035155}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457311035155.html}
     *
     * @type {Node}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    lastChild: Node;

    /**
     * The local part of the qualified name of this node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460875793456}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460875793456.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    localName: string;

    /**
     * The namespace URI of this node, or null if it is unspecified
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456845336913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456845336913.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    namespaceURI: string;

    /**
     * The node immediately following this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455924011229}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455924011229.html}
     *
     * @type {Node}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nextSibling: NodeType | `${NodeType}`;

    /**
     * The name of this node, depending on its type
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458950439452}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458950439452.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nodeName: string;

    /**
     * The type of the underlying object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456552673339}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456552673339.html}
     *
     * @type {NodeType}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    nodeType: NodeType | `${NodeType}`;

    /**
     * The value of this node, depending on its type
     * When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454531188964}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454531188964.html}
     *
     * @type {string}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    nodeValue: string;

    /**
     * The Document object associated with this node
     * This is also the Document object used to create new nodes.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458963562010}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458963562010.html}
     *
     * @type {Document}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    ownerDocument: Document;

    /**
     * The parent of this node
     * All nodes, except Attr, Document, DocumentFragment, Entity, and Notation may have a parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46910644531}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46910644531.html}
     *
     * @type {Node}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    parentNode: Node;

    /**
     * The namespace prefix of this node, or null if it is unspecified
     * When it is defined to be null, setting it has no effect, including if the node is read-only.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460653930663}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460653930663.html}
     *
     * @type {string}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to set the property value
     */
    prefix: string;

    /**
     * The node immediately preceding this node or null if there is no such node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46856323242}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46856323242.html}
     *
     * @type {Node}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    previousSibling: Node;

    /**
     * This attribute returns the text content of this node and its descendants. When it is defined to be null, setting it has no effect.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458147827147}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458147827147.html}
     *
     * @type {string}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
     */
    textContent: string;
  }

  /**
   * Return a new instance of XML Document
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4392323653}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4392323653.html}
   *
   * @classDescription Encapsulation of W3C DOM Document
   * @return {Document}
   * @constructor
   *
   * @since 2015.2
   */
  export interface Document {

    /**
     * Attempts to adopt a node from another document to this document. If supported, it changes the ownerDocument
     * of the source node, its children, as well as the attached attribute nodes if there are any. If the source
     * node has a parent it is first removed from the child list of its parent.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453612609863}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453612609863.html}
     *
     * @param {Node} options.source the node to move into this document
     * @return {Node} the adopted node, or null if this operation fails, such as when the source node comes from a different implementation
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be adopted for some reason
     */
    adoptNode<SourceNode extends Node>(options: {
      source: SourceNode,
    }): SourceNode;

    /**
     * Creates an attribute node of the given name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456575866698}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456575866698.html}
     *
     * @param {string} options.name the name of the attribute
     * @param {string} [options.value] the value of the attribute; if omitted, the value of the attribute will be empty string
     * @return {Attr} new attribute node object with name and attribute value set as expected and localName, prefix, and namespaceURI set to null
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttribute(options: {
      name: string,
      value?: string,
    }): Attr;

    /**
     * Creates an attribute of the given qualified name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452244812011}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452244812011.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to create; can be null
     * @param {string} options.qualifiedName the qualified name of the attribute to instantiate
     * @param {string} [options.value] the value of the attribute; if omitted, the value of the attribute will be empty string
     * @return {Attr} new attribute node object with name, attribute value, namespaceURI, prefix and localName set accordingly
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
     */
    createAttributeNS(options: {
      namespaceURI: string,
      qualifiedName: string,
      value?: string,
    }): Attr;

    /**
     * Creates a CDATASection node whose value is the specified string
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46463562011}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46463562011.html}
     *
     * @param {string} options.data the data for the CDATASection contents
     * @return {Node} the new CDATASection node
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
     * @param {string} options.data the data for the node
     * @return {Node} the new Comment node
     */
    createComment(options: {
      data: string,
    }): Node;

    /**
     * Creates an empty DocumentFragment object
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457661987304}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457661987304.html}
     *
     * @return {Node} a new DocumentFragment
     */
    createDocumentFragment(): Node;

    /**
     * Creates an element of the type specified
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452954040527}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452954040527.html}
     *
     * @param {string} options.tagName the name of the element type to instantiate; for XML, this is case-sensitive
     * @return {Element} a new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElement(options: {
      tagName: string,
    }): Element;

    /**
     * Creates an element of the given qualified name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458257690428}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458257690428.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the element to create; can be null
     * @param {string} options.qualifiedName the qualified name of the element type to instantiate
     * @return {Element} a new Element object with the nodeName, localName, prefix, and namespaceURI set accordingly
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
     */
    createElementNS(options: {
      namespaceURI: string,
      qualifiedName: string,
    }): Element;

    /**
     * Creates a ProcessingInstruction node given the specified name and data strings
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453675170898}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453675170898.html}
     *
     * @param {string} options.target the target part of the processing instruction
     * @param {string} options.data the data for the node
     * @return {Node} the new ProcessingInstruction object
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
     * @param {string} options.data the data for the node
     * @return {Node} the new Text node
     */
    createTextNode(options: {
      data: string
    }): Node;

    /**
     * Returns the Element that has an ID attribute with the given value
     * If no such element exists, this returns null.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458778015135}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458778015135.html}
     *
     * @param {string} options.elementId the unique id value for an element
     * @return {Element} the matching Element or null if there is none
     */
    getElementById(options: {
      elementId: string
    }): Element;

    /**
     * Returns an array of all the Elements with a given tag name in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457710510253}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457710510253.html}
     *
     * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @return {Element[]} an array containing all the matched Elements
     */
    getElementsByTagName(options: {
      tagName: string
    }): Element[];

    /**
     * Returns an array of all the Elements with a given local name and namespace URI in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460907836913}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460907836913.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @return {Element[]} an array containing all the matched Elements
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
     * @param {Node} options.importedNode the node to import
     * @param {boolean} options.deep if true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above
     * @return {Node} the imported node that belongs to this Document
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be imported for some reason
     */
    importNode<ImportedNode extends Node>(options: {
      importedNode: ImportedNode,
      deep: boolean,
    }): ImportedNode;

    /**
     * The Document Type Declaration associated with this document
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454703308105}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454703308105.html}
     *
     * @type {Element}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    doctype: Element;

    /**
     * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452410827636}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452410827636.html}
     *
     * @type {Element}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    documentElement: Element;

    /**
     * The location of the document or null if undefined
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455008483886}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455008483886.html}
     *
     * @type {string}
     */
    documentURI: string;

    /**
     * An attribute specifying the encoding used for this document at the time of the parsing
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452187744140}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452187744140.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    inputEncoding: string;

    /**
     * An attribute specifying, as part of the XML declaration, the encoding of this document
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453554931640}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453554931640.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    xmlEncoding: string;

    /**
     * An attribute specifying, as part of the XML declaration, whether this document is standalone
     * This is false when unspecified.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_459471374510}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_459471374510.html}
     *
     * @type {boolean}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlStandalone: boolean;

    /**
     * An attribute specifying, as part of the XML declaration, the version number of this document
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460908752440}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460908752440.html}
     *
     * @type {string}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
     */
    xmlVersion: string;
  }

  /**
   * Return a new instance of XML Element
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345167426}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345167426.html}
   *
   * @classDescription Encapsulation of W3C DOM Element
   * @return {Element}
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Element {

    /**
     * Retrieves an attribute value by name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457730651854}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457730651854.html}
     *
     * @param {string} options.name the name of the attribute to retrieve
     * @return {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
     */
    getAttribute(options: {
      name: string,
    }): string;

    /**
     * Retrieves an attribute node by name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4588427395}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4588427395.html}
     *
     * @param {string} options.name the name of the attribute to retrieve
     * @return {Attr} the Attr node with the specified name or null if there is no such attribute
     */
    getAttributeNode(options: {
      name: string,
    }): Attr;

    /**
     * Retrieves an attribute node by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452000061035}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452000061035.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param {string} options.localName the local name of the attribute to retrieve
     * @return {Attr} the Attr node with the specified attribute local name and namespace URI or null if there is no such attribute
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    getAttributeNodeNS(options: {
      namespaceURI: string,
      localName: string,
    }): Attr;

    /**
     * Retrieves an attribute value by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_453436523437}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_453436523437.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
     * @param {string} options.localName the local name of the attribute to retrieve
     * @return {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
     */
    getAttributeNS(options: {
      namespaceURI: string,
      localName: string,
    }): Attr;

    /**
     * Returns an array of all descendant Elements with a given tag name, in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_452163024902}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_452163024902.html}
     *
     * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
     * @return {Element[]} an array of matching Element nodes
     */
    getElementsByTagName(options: {
      tagName: string,
    }): Element[];

    /**
     * Returns an array of all descendant Elements with a given local name and namespace URI in document order
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454667602538}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454667602538.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
     * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
     * @return {Element[]} an array of matching Element nodes
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
     * @param {string} options.name the name of the attribute to look for
     * @return {boolean} true if an attribute with the given name is specified on this element or has a default value, false otherwise
     */
    hasAttribute(options: {
      name: string,
    }): boolean;

    /**
     * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458537536620}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458537536620.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to look for; can be null
     * @param {string} options.localName the local name of the attribute to look for
     * @return {boolean} true if an attribute with the given local name and namespace URI is specified or has a default value on this element, false otherwise
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the command cannot be performed for some reason
     */
    hasAttributeNS(options: {
      namespaceURI: string,
      localName: string,
    }): boolean;

    /**
     * Removes an attribute by name
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_457329345702}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_457329345702.html}
     *
     * @param {string} options.name the name of the attribute to remove
     * @return {void}
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    removeAttribute(options: {
      name: string,
    }): void;

    /**
     * Removes the specified attribute node
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454500366210}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454500366210.html}
     *
     * @param {Attr} options.oldAttr the Attr node to remove from the attribute list
     * @return {Attr} the Attr node that was removed
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    removeAttributeNode<OldAttr extends Attr>(options: {
      oldAttr: OldAttr,
    }): OldAttr;

    /**
     * Removes an attribute by local name and namespace URI
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460859619139}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460859619139.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to remove; can be null
     * @param {string} options.localName the local name of the attribute to remove
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
     */
    removeAttributeNS(options: {
      namespaceURI: string,
      localName: string,
    }): void;

    /**
     * Adds a new attribute
     * If an attribute with that name is already present in the element, its value is changed to be that of the value parameter.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_455326171874}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_455326171874.html}
     *
     * @param {string} options.name the name of the attribute to create or alter
     * @param {string} options.value value to set in string form
     * @return {void}
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
     * @param {Attr} options.newAttr the Attr node to add to the attribute list
     * @return {Attr} if the newAttr attribute replaces an existing attribute, the replaced Attr node is returned, otherwise null is returned
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNode<NewAttr extends Attr>(options: {
      newAttr: NewAttr,
    }): NewAttr;

    /**
     * Adds a new attribute node
     * If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_454328857421}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_454328857421.html}
     *
     * @param {Attr} options.newAttr the Attr node to add to the attribute list
     * @return {Attr} if the newAttr attribute replaces an existing attribute with the same local name and namespace URI, the replaced Attr node is returned, otherwise null is returned
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNodeNS<NewAttr extends Attr>(options: {
      newAttr: NewAttr,
    }): NewAttr;

    /**
     * Adds a new attribute. If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed
     * to be the prefix part of the qualifiedName, and its value is changed to be the value parameter.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_456093383788}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_456093383788.html}
     *
     * @param {string} options.namespaceURI the namespace URI of the attribute to create or alter; can be null
     * @param {string} options.qualifiedName the qualified name of the attribute to create or alter
     * @param {string} options.value value to set in string form
     * @return {void}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
     */
    setAttributeNS(options: {
      namespaceURI: string,
      qualifiedName: string,
      value: string,
    }): void;

    /**
     * The name of the element
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_458841796874}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_458841796874.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    tagName: string;
  }

  /**
   * Return a new instance of XML Attr
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345169036}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345169036.html}
   *
   * @classDescription Encapsulation of W3C DOM Attr
   *
   * @protected
   * @constructor
   *
   * @since 2015.2
   */
  export interface Attr {

    /**
     * Returns the name of this attribute
     * If Node.localName is different from null, this property is a qualified name.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46766296386}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46766296386.html}
     *
     * @type {string}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    name: string;

    /**
     * The Element node this attribute is attached to or null if this attribute is not in use
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46546264648}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46546264648.html}
     *
     * @type {Element}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    ownerElement: Element;

    /**
     * True if this attribute was explicitly given a value in the instance document, false otherwise
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_460958801268}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_460958801268.html}
     *
     * @type {boolean}
     * @readonly
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    specified: boolean;

    /**
     * The attribute value. On retrieval, the value of the attribute is returned as a string. Character and general entity
     * references are replaced with their values. On setting, this creates a Text node with the unparsed contents of the string,
     * i.e. any characters that an XML processor would recognize as markup are instead treated as literal text.
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_46829772949}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_46829772949.html}
     *
     * @type {string}
     *
     * @throws {error.SuiteScriptError} SSS_XML_DOM_EXCEPTION if the value cannot be set for some reason
     */
    value: string;
  }
}