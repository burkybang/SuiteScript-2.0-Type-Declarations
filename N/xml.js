// todo: Convert to TypeScript definition

/**
 * SuiteScript xml module
 *
 * @module N/xml
 * @NApiVersion 2.x
 *
 */
function xml() {
}

/**
 * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands).
 *
 * @param {string} options.xmlText the XML text to be escaped
 * @return {string} the escaped XML
 *
 * @since 2015.2
 */
xml.prototype.escape = function (options) {
};

/**
 * Validates a supplied XML document against a supplied XML Schema (XSD Document).
 *
 * @param {Document} options.xml the XML document object
 * @param {number|string} options.xsdFilePathOrId ID or path to the XSD file to validate the XML object against
 * @param {number|string} options.importFolderPathOrId (optional) ID or path to a folder in the file cabinet containing additional XSD schemas which are imported by the parent XSD provided via "xsdFilePathOrId"
 * @throws {SuiteScriptError} SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA if XML provided is invalid with respect to the provided schema
 * @throws {SuiteScriptError} SSS_INVALID_XML_SCHEMA_OR_DEPENDENCY if schema is an incorrectly structured XSD, or a dependent schema could not be found
 * @return {void}
 *
 * @since 2015.2
 */
xml.prototype.validate = function (options) {
};

/**
 * XML Parser Object
 *
 * @type {Parser}
 */
xml.prototype.Parser = undefined;
/**
 * XPath Query Object
 *
 * @type {XPath}
 */
xml.prototype.XPath = undefined;

/**
 * @enum
 */
function xmlNodeType() {
  this.ELEMENT_NODE = 'ELEMENT_NODE';
  this.ATTRIBUTE_NODE = 'ATTRIBUTE_NODE';
  this.TEXT_NODE = 'TEXT_NODE';
  this.CDATA_SECTION_NODE = 'CDATA_SECTION_NODE';
  this.ENTITY_REFERENCE_NODE = 'ENTITY_REFERENCE_NODE';
  this.ENTITY_NODE = 'ENTITY_NODE';
  this.ENTITY_NODE = 'ENTITY_NODE';
  this.PROCESSING_INSTRUCTION_NODE = 'PROCESSING_INSTRUCTION_NODE';
  this.COMMENT_NODE = 'COMMENT_NODE';
  this.DOCUMENT_NODE = 'DOCUMENT_NODE';
  this.DOCUMENT_TYPE_NODE = 'DOCUMENT_TYPE_NODE';
  this.DOCUMENT_FRAGMENT_NODE = 'DOCUMENT_FRAGMENT_NODE';
  this.NOTATION_NODE = 'NOTATION_NODE';
}

xml.prototype.NodeType = xmlNodeType;

/**
 * XML Parser Object
 */
function Parser() {
  
  /**
   * Generate XML Document object from a string.
   *
   * @param {string} options.text XML text
   * @return {Document}
   *
   * @since 2015.2
   */
  this.prototype.fromString = function (options) {
  };
  
  /**
   * Generate a String from an XML Document object.
   *
   * @param {Document} options.document XML Document object
   * @return {string}
   *
   * @since 2015.2
   */
  this.prototype.toString = function (options) {
  };
}

/**
 * XPath Query Object
 */
function XPath() {
  
  /**
   * Returns an Array of Nodes matching the provided XPath expression.
   *
   * @param {string} options.xpath an XPath expression
   * @param {Node} options.node XML node being queried
   * @return {Node[]} nodes associated with the current result
   *
   * @since 2015.2
   */
  this.prototype.select = function (options) {
  };
}

/**
 * Return a new instance of XML Node.
 *
 * @classDescription Encapsulation of W3C DOM Node
 * @return {Node}
 * @constructor
 *
 * @since 2015.2
 */
function Node() {
  
  /**
   * Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.
   *
   * @param {Node} options.newChild the node to add
   * @return {Node} the node added
   * @throws {SuiteScriptError} SSS_DOM_EXCEPTION if node cannot be appended for some reason
   */
  this.prototype.appendChild = function (options) {
  };
  
  /**
   * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes. The duplicate node has no parent.
   *
   * @param {boolean} options.deep if true, recursively clone the subtree under the specified node; if false, clone only the node itself (and its attributes, if it is an Element)
   * @return {Node} the duplicate node
   */
  this.prototype.cloneNode = function (options) {
  };
  
  /**
   * Compares the reference node, i.e. the node on which this method is being called, with a node, i.e. the one passed as a parameter,
   * with regard to their position in the document and according to the document order.
   *
   * @param {Node} options.other the node to compare against the reference node
   * @return {number} how the node is positioned relatively to the reference node
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION when the nodes cannot be compared
   */
  this.prototype.compareDocumentPosition = function (options) {
  };
  
  /**
   * Returns whether this node (if it is an Element) has any attributes.
   *
   * @return {boolean} true if this node has any attributes, false otherwise
   */
  this.prototype.hasAttributes = function (options) {
  };
  
  /**
   * Returns whether this node has any children.
   *
   * @return {boolean} true if this node has any children, false otherwise
   */
  this.prototype.hasChildNodes = function (options) {
  };
  
  /**
   * Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children.
   * If the newChild is already in the tree, it is first removed.
   *
   * @param {Node} options.newChild the node to insert
   * @param {Node} options.refChild the reference node, i.e., the node before which the new node will be inserted
   * @return {Node} the node being inserted
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be inserted for some reason
   */
  this.prototype.insertBefore = function (options) {
  };
  
  /**
   * This method checks if the specified namespaceURI is the default namespace or not.
   *
   * @param {string} options.namespaceURI the namespace URI to look for
   * @return {boolean} true if the specified namespaceURI is the default namespace, false otherwise
   */
  this.prototype.isDefaultNamespace = function (options) {
  };
  
  /**
   * Tests whether two nodes are equal.
   * This method tests for equality of nodes, not sameness (i.e., whether the two nodes are references to the same object) which can be tested
   * with Node.isSameNode(). All nodes that are the same will also be equal, though the reverse may not be true.
   * Two nodes are equal if and only if the following conditions are satisfied:
   * - The two nodes are of the same type.
   * - The following string attributes are equal: nodeName, localName, namespaceURI, prefix, nodeValue
   * - The attributes maps are equal
   * - The childNodes lists are equal
   *
   * @param {Node} options.other the node to compare equality with
   * @return {boolean} true if the nodes are equal, false otherwise
   */
  this.prototype.isEqualNode = function (options) {
  };
  
  /**
   * Returns whether this node is the same node as the given one.
   * This method provides a way to determine whether two Node references returned by the implementation reference the same object.
   * When two Node references are references to the same object, even if through a proxy, the references may be used completely interchangeably,
   * such that all attributes have the same values and calling the same DOM method on either reference always has exactly the same effect.
   *
   * @param {Node} options.other the node to test against
   * @return {boolean} true if the nodes are the same, false otherwise
   */
  this.prototype.isSameNode = function (options) {
  };
  
  /**
   * Look up the namespace URI associated to the given prefix, starting from this node.
   *
   * @param {string} options.prefix the prefix to look for; if this parameter is null, the method will return the default namespace URI if any
   * @return {string} the associated namespace URI or null if none is found
   */
  this.prototype.lookupNamespaceURI = function (options) {
  };
  
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node. The default namespace declarations are ignored by this method.
   *
   * @param {string} options.namespaceURI the namespace URI to look for
   * @return {string} an associated namespace prefix if found or null if none is found; if more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent
   */
  this.prototype.lookupPrefix = function (options) {
  };
  
  /**
   * Puts all Text nodes in the full depth of the sub-tree underneath this Node, including attribute nodes, into a "normal" form
   * where only structure (e.g., elements, comments, processing instructions, CDATA sections, and entity references) separates
   * Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.
   *
   * @return {void}
   */
  this.prototype.normalize = function (options) {
  };
  
  /**
   * Removes the child node indicated by oldChild from the list of children, and returns it.
   *
   * @param {Node} options.oldChild the node being removed
   * @return {Node} the node removed
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be removed for some reason
   */
  this.prototype.removeChild = function (options) {
  };
  
  /**
   * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node.
   * If the newChild is already in the tree, it is first removed.
   *
   * @param {Node} options.newChild the new node to put in the child list
   * @param {Node} options.oldChild the node being replaced in the list
   * @return {Node} the node replaced
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if node cannot be replaced for some reason
   */
  this.prototype.replaceChild = function (options) {
  };
  
  /**
   * A map of key/value (string->Attr) pairs containing the attributes of this node (if it is an Element) or null otherwise.
   * @name Node#attributes
   * @type {Object}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.attributes = undefined;
  /**
   * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.
   * @name Node#baseURI
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.baseURI = undefined;
  /**
   * An array of all children of this node. If there are no children, this is an empty array.
   * @name Node#childNodes
   * @type {Node[]}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.childNodes = undefined;
  /**
   * The first child of this node or null if there is no such node.
   * @name Node#firstChild
   * @type {Node}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.firstChild = undefined;
  /**
   * The last child of this node or null if there is no such node.
   * @name Node#lastChild
   * @type {Node}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.lastChild = undefined;
  /**
   * The local part of the qualified name of this node.
   * @name Node#localName
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.localName = undefined;
  /**
   * The namespace URI of this node, or null if it is unspecified.
   * @name Node#namespaceURI
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.namespaceURI = undefined;
  /**
   * The node immediately following this node or null if there is no such node.
   * @name Node#nextSibling
   * @type {Node}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.nextSibling = undefined;
  /**
   * The name of this node, depending on its type.
   * @name Node#nodeName
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.nodeName = undefined;
  /**
   * The type of the underlying object.
   * @name Node#nodeType
   * @type {NodeType}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.nodeType = undefined;
  /**
   * The value of this node, depending on its type. When it is defined to be null, setting it has no effect, including if the node is read-only.
   * @name Node#nodeValue
   * @type {string}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
   */
  this.prototype.nodeValue = undefined;
  /**
   * The Document object associated with this node. This is also the Document object used to create new nodes.
   * @name Node#ownerDocument
   * @type {Document}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.ownerDocument = undefined;
  /**
   * The parent of this node. All nodes, except Attr, Document, DocumentFragment, Entity, and Notation may have a parent.
   * @name Node#parentNode
   * @type {Node}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.parentNode = undefined;
  /**
   * The namespace prefix of this node, or null if it is unspecified. When it is defined to be null, setting it has no effect, including if the node is read-only.
   * @name Node#prefix
   * @type {string}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to set the property value
   */
  this.prototype.prefix = undefined;
  /**
   * The node immediately preceding this node or null if there is no such node.
   * @name Node#previousSibling
   * @type {Node}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.previousSibling = undefined;
  /**
   * This attribute returns the text content of this node and its descendants. When it is defined to be null, setting it has no effect.
   * @name Node#textContent
   * @type {string}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if it's not possible to get or set the property value
   */
  this.prototype.textContent = undefined;
}

/**
 * Return a new instance of XML Document.
 *
 * @classDescription Encapsulation of W3C DOM Document
 * @return {Document}
 * @constructor
 *
 * @since 2015.2
 */
function Document() {
  
  /**
   * Attempts to adopt a node from another document to this document. If supported, it changes the ownerDocument
   * of the source node, its children, as well as the attached attribute nodes if there are any. If the source
   * node has a parent it is first removed from the child list of its parent.
   *
   * @param {Node} options.source the node to move into this document
   * @return {Node} the adopted node, or null if this operation fails, such as when the source node comes from a different implementation
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be adopted for some reason
   */
  this.prototype.adoptNode = function (options) {
  };
  
  /**
   * Creates an attribute node of the given name.
   *
   * @param {string} options.name the name of the attribute
   * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
   * @return {Attr} new attribute node object with name and attribute value set as expected and localName, prefix, and namespaceURI set to null
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
   */
  this.prototype.createAttribute = function (options) {
  };
  
  /**
   * Creates an attribute of the given qualified name and namespace URI.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to create; can be null
   * @param {string} options.qualifiedName the qualified name of the attribute to instantiate
   * @param {string} options.value (optional) the value of the attribute; if omitted, the value of the attribute will be empty string
   * @return {Attr} new attribute node object with name, attribute value, namespaceURI, prefix and localName set accordingly
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be created
   */
  this.prototype.createAttributeNS = function (options) {
  };
  
  /**
   * Creates a CDATASection node whose value is the specified string.
   *
   * @param {string} options.data the data for the CDATASection contents
   * @return {Node} the new CDATASection node
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the CDATASection node cannot be created
   */
  this.prototype.createCDATASection = function (options) {
  };
  
  /**
   * Creates a Comment node given the specified string.
   *
   * @param {string} options.data the data for the node
   * @return {Node} the new Comment node
   */
  this.prototype.createComment = function (options) {
  };
  
  /**
   * Creates an empty DocumentFragment object.
   *
   * @return {Node} a new DocumentFragment
   */
  this.prototype.createDocumentFragment = function (options) {
  };
  
  /**
   * Creates an element of the type specified.
   *
   * @param {string} options.tagName the name of the element type to instantiate; for XML, this is case-sensitive
   * @return {Element} a new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
   */
  this.prototype.createElement = function (options) {
  };
  
  /**
   * Creates an element of the given qualified name and namespace URI.
   *
   * @param {string} options.namespaceURI the namespace URI of the element to create; can be null
   * @param {string} options.qualifiedName the qualified name of the element type to instantiate
   * @return {Element} a new Element object with the nodeName, localName, prefix, and namespaceURI set accordingly
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the Element node cannot be created
   */
  this.prototype.createElementNS = function (options) {
  };
  
  /**
   * Creates a ProcessingInstruction node given the specified name and data strings.
   *
   * @param {string} options.target the target part of the processing instruction
   * @param {string} options.data the data for the node
   * @return {Node} the new ProcessingInstruction object
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the ProcessingInstruction node cannot be created
   */
  this.prototype.createProcessingInstruction = function (options) {
  };
  
  /**
   * Creates a Text node given the specified string.
   *
   * @param {string} options.data the data for the node
   * @return {Node} the new Text node
   */
  this.prototype.createTextNode = function (options) {
  };
  
  /**
   * Returns the Element that has an ID attribute with the given value. If no such element exists, this returns null.
   *
   * @param {string} options.elementId the unique id value for an element
   * @return {Element} the matching Element or null if there is none
   */
  this.prototype.getElementById = function (options) {
  };
  
  /**
   * Returns an array of all the Elements with a given tag name in document order.
   *
   * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
   * @return {Element[]} an array containing all the matched Elements
   */
  this.prototype.getElementsByTagName = function (options) {
  };
  
  /**
   * Returns an array of all the Elements with a given local name and namespace URI in document order.
   *
   * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
   * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
   * @return {Element[]} an array containing all the matched Elements
   */
  this.prototype.getElementsByTagNameNS = function (options) {
  };
  
  /**
   * Imports a node from another document to this document, without altering or removing the source node from the original document;
   * this method creates a new copy of the source node.
   *
   * @param {Node} options.importedNode the node to import
   * @param {boolean} options.deep if true, recursively import the subtree under the specified node; if false, import only the node itself, as explained above
   * @return {Node} the imported node that belongs to this Document
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the node cannot be imported for some reason
   */
  this.prototype.importNode = function (options) {
  };
  
  /**
   * The Document Type Declaration associated with this document.
   * @name Document#doctype
   * @type {Object}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.doctype = undefined;
  /**
   * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
   * @name Document#documentElement
   * @type {Element}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.documentElement = undefined;
  /**
   * The location of the document or null if undefined.
   * @name Document#documentURI
   * @type {string}
   */
  this.prototype.documentURI = undefined;
  /**
   * An attribute specifying the encoding used for this document at the time of the parsing.
   * @name Document#inputEncoding
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.inputEncoding = undefined;
  /**
   * An attribute specifying, as part of the XML declaration, the encoding of this document.
   * @name Document#xmlEncoding
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.xmlEncoding = undefined;
  /**
   * An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when unspecified.
   * @name Document#xmlStandalone
   * @type {boolean}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
   */
  this.prototype.xmlStandalone = undefined;
  /**
   * An attribute specifying, as part of the XML declaration, the version number of this document.
   * @name Document#xmlVersion
   * @type {string}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the property cannot be set
   */
  this.prototype.xmlVersion = undefined;
}

/**
 * Return a new instance of XML Element.
 *
 * @classDescription Encapsulation of W3C DOM Element
 * @return {Element}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Element() {
  
  /**
   * Retrieves an attribute value by name.
   *
   * @param {string} options.name the name of the attribute to retrieve
   * @return {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
   */
  this.prototype.getAttribute = function (options) {
  };
  
  /**
   * Retrieves an attribute node by name.
   *
   * @param {string} options.name the name of the attribute to retrieve
   * @return {Attr} the Attr node with the specified name or null if there is no such attribute
   */
  this.prototype.getAttributeNode = function (options) {
  };
  
  /**
   * Retrieves an attribute node by local name and namespace URI.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
   * @param {string} options.localName the local name of the attribute to retrieve
   * @return {Attr} the Attr node with the specified attribute local name and namespace URI or null if there is no such attribute
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
   */
  this.prototype.getAttributeNodeNS = function (options) {
  };
  
  /**
   * Retrieves an attribute value by local name and namespace URI.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to retrieve; can be null
   * @param {string} options.localName the local name of the attribute to retrieve
   * @return {string} the Attr value as a string, or the empty string if that attribute does not have a specified or default value
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be retrieved for some reason
   */
  this.prototype.getAttributeNS = function (options) {
  };
  
  /**
   * Returns an array of all descendant Elements with a given tag name, in document order.
   *
   * @param {string} options.tagName the name of the tag to match on; the special value "*" matches all tags; for XML, the tagName parameter is case-sensitive
   * @return {Element[]} an array of matching Element nodes
   */
  this.prototype.getElementsByTagName = function (options) {
  };
  
  /**
   * Returns an array of all descendant Elements with a given local name and namespace URI in document order.
   *
   * @param {string} options.namespaceURI the namespace URI of the elements to match on; the special value "*" matches all namespaces
   * @param {string} options.localName the local name of the elements to match on; the special value "*" matches all local names
   * @return {Element[]} an array of matching Element nodes
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the elements cannot be retrieved for some reason
   */
  this.prototype.getElementsByTagNameNS = function (options) {
  };
  
  /**
   * Returns true when an attribute with a given name is specified on this element or has a default value, false otherwise.
   *
   * @param {string} options.name the name of the attribute to look for
   * @return {boolean} true if an attribute with the given name is specified on this element or has a default value, false otherwise
   */
  this.prototype.hasAttribute = function (options) {
  };
  
  /**
   * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to look for; can be null
   * @param {string} options.localName the local name of the attribute to look for
   * @return {boolean} true if an attribute with the given local name and namespace URI is specified or has a default value on this element, false otherwise
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the command cannot be performed for some reason
   */
  this.prototype.hasAttributeNS = function (options) {
  };
  
  /**
   * Removes an attribute by name.
   *
   * @param {string} options.name the name of the attribute to remove
   * @return {void}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
   */
  this.prototype.removeAttribute = function (options) {
  };
  
  /**
   * Removes the specified attribute node.
   *
   * @param {Attr} options.oldAttr the Attr node to remove from the attribute list
   * @return {Attr} the Attr node that was removed
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
   */
  this.prototype.removeAttributeNode = function (options) {
  };
  
  /**
   * Removes an attribute by local name and namespace URI.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to remove; can be null
   * @param {string} options.localName the local name of the attribute to remove
   * @return {void}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be removed for some reason
   */
  this.prototype.removeAttributeNS = function (options) {
  };
  
  /**
   * Adds a new attribute. If an attribute with that name is already present in the element, its value is changed to be that of the value parameter.
   *
   * @param {string} options.name the name of the attribute to create or alter
   * @param {string} options.value value to set in string form
   * @return {void}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
   */
  this.prototype.setAttribute = function (options) {
  };
  
  /**
   * Adds a new attribute node. If an attribute with that name is already present in the element, it is replaced by the new one.
   *
   * @param {Attr} options.newAttr the Attr node to add to the attribute list
   * @return {Attr} if the newAttr attribute replaces an existing attribute, the replaced Attr node is returned, otherwise null is returned
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
   */
  this.prototype.setAttributeNode = function (options) {
  };
  
  /**
   * Adds a new attribute node. If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.
   *
   * @param {Attr} options.newAttr the Attr node to add to the attribute list
   * @return {Attr} if the newAttr attribute replaces an existing attribute with the same local name and namespace URI, the replaced Attr node is returned, otherwise null is returned
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
   */
  this.prototype.setAttributeNodeNS = function (options) {
  };
  
  /**
   * Adds a new attribute. If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed
   * to be the prefix part of the qualifiedName, and its value is changed to be the value parameter.
   *
   * @param {string} options.namespaceURI the namespace URI of the attribute to create or alter; can be null
   * @param {string} options.qualifiedName the qualified name of the attribute to create or alter
   * @param {string} options.value value to set in string form
   * @return {void}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the attribute cannot be added for some reason
   */
  this.prototype.setAttributeNS = function (options) {
  };
  
  /**
   * The name of the element.
   * @name Element#tagName
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.tagName = undefined;
}

/**
 * Return a new instance of XML Attr.
 *
 * @classDescription Encapsulation of W3C DOM Attr
 * @return {Attr}
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
function Attr() {
  
  /**
   * Returns the name of this attribute. If Node.localName is different from null, this property is a qualified name.
   * @name Attr#name
   * @type {string}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.name = undefined;
  /**
   * The Element node this attribute is attached to or null if this attribute is not in use.
   * @name Attr#ownerElement
   * @type {Element}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.ownerElement = undefined;
  /**
   * True if this attribute was explicitly given a value in the instance document, false otherwise.
   * @name Attr#specified
   * @type {boolean}
   * @readonly
   * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
   */
  this.prototype.specified = undefined;
  /**
   * The attribute value. On retrieval, the value of the attribute is returned as a string. Character and general entity
   * references are replaced with their values. On setting, this creates a Text node with the unparsed contents of the string,
   * i.e. any characters that an XML processor would recognize as markup are instead treated as literal text.
   * @name Attr#value
   * @type {string}
   * @throws {SuiteScriptError} SSS_XML_DOM_EXCEPTION if the value cannot be set for some reason
   */
  this.prototype.value = undefined;
}

xml = new xml();
/**
 * @type {xml}
 */
N.prototype.xml = xml;