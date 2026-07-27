/// <reference path="./error.d.ts" />

/**
 * SuiteScript Generative AI APIs (N/llm module) - send requests to large language models (LLMs) and receive responses. NetSuite reaches the LLMs through the Oracle Cloud Infrastructure (OCI) Generative AI service. Available by default when the Server SuiteScript feature is enabled, in supported account regions only.
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_9123730083}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_9123730083.html}
 * @module N/llm
 * @NApiVersion 2.x
 *
 * @restriction Server-side scripts only
 */
interface llm {

  /**
   * Creates a chat message (a single turn in a conversation) for use as chat history
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014104320}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014104320.html}
   *
   * @governance none
   * @since 2024.1
   *
   * @param options
   * @param options.text - Text of the chat message
   * @param options.role - Role (author) of the chat message
   *
   * @throws {error.SuiteScriptError} INVALID_CHAT_ROLE when the role is outside of the ChatRole enum
   */
  createChatMessage(options: {
    text: string,
    role: llm.ChatRole | `${llm.ChatRole}`,
  }): llm.ChatMessage;

  /**
   * Creates a document (id + data) to provide to the LLM as a source for retrieval-augmented generation (RAG)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_79091440431}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_79091440431.html}
   *
   * @governance none
   * @since 2025.1
   *
   * @param options
   * @param options.id - Identifier for the document (referenced by Citation.documentIds)
   * @param options.data - Text content of the document
   */
  createDocument(options: {
    id: string,
    data: string,
  }): llm.Document;

  /**
   * Creates a tool that the LLM can request to call during generation
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   *
   * @param options
   * @param options.name - Name of the tool
   * @param options.description - Description of what the tool does
   * @param options.parameters - The parameters the tool accepts (each created with createToolParameter)
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if name is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if parameters is not an array of tool parameters
   */
  createTool(options: {
    name: string,
    description: string,
    parameters: llm.ToolParameter[],
  }): llm.Tool;

  /**
   * Creates a tool parameter definition for use in createTool
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   *
   * @param options
   * @param options.name - Name of the parameter
   * @param options.type - Type of the parameter
   * @param [options.description] - Description of the parameter
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if name is missing
   */
  createToolParameter(options: {
    name: string,
    type: llm.ToolParameterType | `${llm.ToolParameterType}`,
    description?: string,
  }): llm.ToolParameter;

  /**
   * Creates a tool result that carries the outcome of a tool call back to the LLM
   * Undocumented in the Help Center; present at runtime.
   *
   * @governance none
   *
   * @param options
   * @param options.call - The tool call this result responds to
   * @param options.outputs - The output objects produced by running the tool
   *
   * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if call or outputs is missing
   * @throws {error.SuiteScriptError} SSS_INVALID_TYPE_ARG if outputs is not an array
   */
  createToolResult(options: {
    call: llm.ToolCall,
    outputs: object[],
  }): llm.ToolResult;

  generateText: {

    /**
     * Returns a response from the LLM for the given prompt
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014032554}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014032554.html}
     *
     * @governance 100 units
     * @since 2024.1
     *
     * @param prompt - Prompt for the LLM
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     */
    (prompt: string): llm.Response;

    /**
     * Returns a response from the LLM for the given prompt
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014032554}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014032554.html}
     *
     * @governance 100 units
     * @since 2024.1
     *
     * @param options
     * @param options.prompt - Prompt for the LLM
     * @param [options.modelFamily] - LLM model family to use; defaults to Cohere Command
     * @param [options.modelParameters] - Parameters of the model
     * @param [options.documents] - Source documents for retrieval-augmented generation (RAG)
     * @param [options.chatHistory] - Chat history to be taken into consideration
     * @param [options.preamble] - Preamble for the text generation
     * @param [options.safetyMode] - Safety mode applied to the request
     * @param [options.responseFormat] - JSON schema describing the structured response format
     * @param [options.tools] - Tools the LLM may call during generation. Undocumented in the Help Center; present at runtime.
     * @param [options.webSearchContext] - Amount of web-search context to use. Undocumented in the Help Center; present at runtime.
     * @param [options.verbosity] - Verbosity of the generated response. Undocumented in the Help Center; present at runtime.
     * @param [options.reasoningEffort] - Reasoning effort the model should apply. Undocumented in the Help Center; present at runtime.
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if an unknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if modelFamily is not a valid value
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_PREAMBLE if the model does not accept a preamble
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS if the model does not accept documents
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_RESPONSE_FORMAT if the model does not accept a response format
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE if the model does not accept a safety mode
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE if two documents share the same id
     * @throws {error.SuiteScriptError} INAPPROPRIATE_CONTENT_DETECTED if the request or response is flagged as inappropriate
     * @throws {error.SuiteScriptError} INVALID_SAFETY_MODE if safetyMode is not a valid value
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topP value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} RESPONSE_FORMAT_HAS_INVALID_JSON_SCHEMA if responseFormat is not a valid JSON schema
     */
    (options: {
      prompt: string,
      modelFamily?: llm.ModelFamily | `${llm.ModelFamily}`,
      modelParameters?: llm.ModelParameters,
      documents?: llm.Document[],
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      safetyMode?: llm.SafetyMode | `${llm.SafetyMode}`,
      responseFormat?: object,
      tools?: llm.Tool[],
      webSearchContext?: llm.WebSearchContext | `${llm.WebSearchContext}`,
      verbosity?: llm.Verbosity | `${llm.Verbosity}`,
      reasoningEffort?: llm.ReasoningEffort | `${llm.ReasoningEffort}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): llm.Response;

    /**
     * Returns a response from the LLM for the given prompt asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014032554}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014032554.html}
     *
     * @governance 100 units
     * @since 2024.1
     *
     * @param prompt - Prompt for the LLM
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     */
    promise(prompt: string): Promise<llm.Response>;

    /**
     * Returns a response from the LLM for the given prompt asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014032554}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014032554.html}
     *
     * @governance 100 units
     * @since 2024.1
     *
     * @param options
     * @param options.prompt - Prompt for the LLM
     * @param [options.modelFamily] - LLM model family to use; defaults to Cohere Command
     * @param [options.modelParameters] - Parameters of the model
     * @param [options.documents] - Source documents for retrieval-augmented generation (RAG)
     * @param [options.chatHistory] - Chat history to be taken into consideration
     * @param [options.preamble] - Preamble for the text generation
     * @param [options.safetyMode] - Safety mode applied to the request
     * @param [options.responseFormat] - JSON schema describing the structured response format
     * @param [options.tools] - Tools the LLM may call during generation. Undocumented in the Help Center; present at runtime.
     * @param [options.webSearchContext] - Amount of web-search context to use. Undocumented in the Help Center; present at runtime.
     * @param [options.verbosity] - Verbosity of the generated response. Undocumented in the Help Center; present at runtime.
     * @param [options.reasoningEffort] - Reasoning effort the model should apply. Undocumented in the Help Center; present at runtime.
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if an unknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if modelFamily is not a valid value
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_PREAMBLE if the model does not accept a preamble
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS if the model does not accept documents
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_RESPONSE_FORMAT if the model does not accept a response format
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE if the model does not accept a safety mode
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE if two documents share the same id
     * @throws {error.SuiteScriptError} INAPPROPRIATE_CONTENT_DETECTED if the request or response is flagged as inappropriate
     * @throws {error.SuiteScriptError} INVALID_SAFETY_MODE if safetyMode is not a valid value
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topP value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} RESPONSE_FORMAT_HAS_INVALID_JSON_SCHEMA if responseFormat is not a valid JSON schema
     */
    promise(options: {
      prompt: string,
      modelFamily?: llm.ModelFamily | `${llm.ModelFamily}`,
      modelParameters?: llm.ModelParameters,
      documents?: llm.Document[],
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      safetyMode?: llm.SafetyMode | `${llm.SafetyMode}`,
      responseFormat?: object,
      tools?: llm.Tool[],
      webSearchContext?: llm.WebSearchContext | `${llm.WebSearchContext}`,
      verbosity?: llm.Verbosity | `${llm.Verbosity}`,
      reasoningEffort?: llm.ReasoningEffort | `${llm.ReasoningEffort}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): Promise<llm.Response>;
  };

  /**
   * Alias of generateText
   * Undocumented in the Help Center; present at runtime.
   */
  chat: llm['generateText'];

  generateTextStreamed: {

    /**
     * Streams a response from the LLM for the given prompt, returning content as it is generated
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_46075557997}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_46075557997.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options - Same options as generateText
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if an unknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if modelFamily is not a valid value
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_PREAMBLE if the model does not accept a preamble
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS if the model does not accept documents
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE if the model does not accept a safety mode
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE if two documents share the same id
     * @throws {error.SuiteScriptError} INAPPROPRIATE_CONTENT_DETECTED if the request or response is flagged as inappropriate
     * @throws {error.SuiteScriptError} INVALID_SAFETY_MODE if safetyMode is not a valid value
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topP value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     */
    (options: {
      prompt: string,
      modelFamily?: llm.ModelFamily | `${llm.ModelFamily}`,
      modelParameters?: llm.ModelParameters,
      documents?: llm.Document[],
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      safetyMode?: llm.SafetyMode | `${llm.SafetyMode}`,
      tools?: llm.Tool[],
      webSearchContext?: llm.WebSearchContext | `${llm.WebSearchContext}`,
      verbosity?: llm.Verbosity | `${llm.Verbosity}`,
      reasoningEffort?: llm.ReasoningEffort | `${llm.ReasoningEffort}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): llm.StreamedResponse;

    /**
     * Streams a response from the LLM for the given prompt asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_46075557997}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_46075557997.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options - Same options as generateText
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if an unknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if modelFamily is not a valid value
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_PREAMBLE if the model does not accept a preamble
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_DOCUMENTS if the model does not accept documents
     * @throws {error.SuiteScriptError} MODEL_1_DOES_NOT_ACCEPT_SAFETY_MODE if the model does not accept a safety mode
     * @throws {error.SuiteScriptError} DOCUMENT_IDS_MUST_BE_UNIQUE if two documents share the same id
     * @throws {error.SuiteScriptError} INAPPROPRIATE_CONTENT_DETECTED if the request or response is flagged as inappropriate
     * @throws {error.SuiteScriptError} INVALID_SAFETY_MODE if safetyMode is not a valid value
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topP value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     */
    promise(options: {
      prompt: string,
      modelFamily?: llm.ModelFamily | `${llm.ModelFamily}`,
      modelParameters?: llm.ModelParameters,
      documents?: llm.Document[],
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      safetyMode?: llm.SafetyMode | `${llm.SafetyMode}`,
      tools?: llm.Tool[],
      webSearchContext?: llm.WebSearchContext | `${llm.WebSearchContext}`,
      verbosity?: llm.Verbosity | `${llm.Verbosity}`,
      reasoningEffort?: llm.ReasoningEffort | `${llm.ReasoningEffort}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): Promise<llm.StreamedResponse>;
  };

  /**
   * Alias of generateTextStreamed
   * Undocumented in the Help Center; present at runtime.
   */
  chatStreamed: llm['generateTextStreamed'];

  embed: {

    /**
     * Converts text inputs to vector embeddings
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_76083302199}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_76083302199.html}
     *
     * @governance 50 units
     * @since 2025.1
     *
     * @param options
     * @param options.inputs - Text inputs to embed
     * @param [options.embedModelFamily] - Embedding model family to use
     * @param [options.dimensions] - Number of dimensions of the output embeddings
     * @param [options.truncate] - How to truncate inputs that exceed the model's token limit
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if inputs is missing
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if embedModelFamily is not a valid value
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} NO_INPUTS_TO_EMBED if inputs is empty
     * @throws {error.SuiteScriptError} CAN_EMBED_1_INPUTS_AT_MAXIMUM if more than the allowed number of inputs is provided
     * @throws {error.SuiteScriptError} INVALID_TRUNCATION_METHOD if truncate is not a valid value
     * @throws {error.SuiteScriptError} UNSUPPORTED_NUMBER_OF_TOKENS if an input exceeds the supported number of tokens
     */
    (options: {
      inputs: string[],
      embedModelFamily?: llm.EmbedModelFamily | `${llm.EmbedModelFamily}`,
      dimensions?: number,
      truncate?: llm.Truncate | `${llm.Truncate}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): llm.EmbedResponse;

    /**
     * Converts text inputs to vector embeddings asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_76083302199}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_76083302199.html}
     *
     * @governance 50 units
     * @since 2025.1
     *
     * @param options
     * @param options.inputs - Text inputs to embed
     * @param [options.embedModelFamily] - Embedding model family to use
     * @param [options.dimensions] - Number of dimensions of the output embeddings
     * @param [options.truncate] - How to truncate inputs that exceed the model's token limit
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if inputs is missing
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MODEL_FAMILY_VALUE if embedModelFamily is not a valid value
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} NO_INPUTS_TO_EMBED if inputs is empty
     * @throws {error.SuiteScriptError} CAN_EMBED_1_INPUTS_AT_MAXIMUM if more than the allowed number of inputs is provided
     * @throws {error.SuiteScriptError} INVALID_TRUNCATION_METHOD if truncate is not a valid value
     * @throws {error.SuiteScriptError} UNSUPPORTED_NUMBER_OF_TOKENS if an input exceeds the supported number of tokens
     */
    promise(options: {
      inputs: string[],
      embedModelFamily?: llm.EmbedModelFamily | `${llm.EmbedModelFamily}`,
      dimensions?: number,
      truncate?: llm.Truncate | `${llm.Truncate}`,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): Promise<llm.EmbedResponse>;
  };

  evaluatePrompt: {

    /**
     * Evaluates a prompt defined in Prompt Studio and returns the LLM response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0115064704}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0115064704.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options
     * @param options.id - ID of the Prompt Studio prompt to evaluate
     * @param [options.variables] - Values for the variables used in the prompt
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing
     * @throws {error.SuiteScriptError} INVALID_ID_PREFIX if the prompt id has an invalid prefix
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} TEMPLATE_PROCESSING_EXCEPTION if the prompt template cannot be processed
     */
    (options: {
      id: string | number,
      variables?: Record<string, string>,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): llm.Response;

    /**
     * Evaluates a Prompt Studio prompt asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0115064704}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0115064704.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options
     * @param options.id - ID of the Prompt Studio prompt to evaluate
     * @param [options.variables] - Values for the variables used in the prompt
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing
     * @throws {error.SuiteScriptError} INVALID_ID_PREFIX if the prompt id has an invalid prefix
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} TEMPLATE_PROCESSING_EXCEPTION if the prompt template cannot be processed
     */
    promise(options: {
      id: string | number,
      variables?: Record<string, string>,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): Promise<llm.Response>;
  };

  /**
   * Alias of evaluatePrompt
   * Undocumented in the Help Center; present at runtime.
   */
  executePrompt: llm['evaluatePrompt'];

  evaluatePromptStreamed: {

    /**
     * Evaluates a Prompt Studio prompt and streams the LLM response
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_47080704730}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_47080704730.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options
     * @param options.id - ID of the Prompt Studio prompt to evaluate
     * @param [options.variables] - Values for the variables used in the prompt
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing
     * @throws {error.SuiteScriptError} INVALID_ID_PREFIX if the prompt id has an invalid prefix
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} TEMPLATE_PROCESSING_EXCEPTION if the prompt template cannot be processed
     */
    (options: {
      id: string | number,
      variables?: Record<string, string>,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): llm.StreamedResponse;

    /**
     * Evaluates a Prompt Studio prompt and streams the LLM response asynchronously
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_47080704730}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_47080704730.html}
     *
     * @governance 100 units
     * @since 2025.1
     *
     * @param options
     * @param options.id - ID of the Prompt Studio prompt to evaluate
     * @param [options.variables] - Values for the variables used in the prompt
     * @param [options.timeout=30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.ociConfig] - Config needed for unlimited usage
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id is missing
     * @throws {error.SuiteScriptError} INVALID_ID_PREFIX if the prompt id has an invalid prefix
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if an unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     * @throws {error.SuiteScriptError} TEMPLATE_PROCESSING_EXCEPTION if the prompt template cannot be processed
     */
    promise(options: {
      id: string | number,
      variables?: Record<string, string>,
      timeout?: number,
      ociConfig?: llm.OciConfig,
    }): Promise<llm.StreamedResponse>;
  };

  /**
   * Alias of evaluatePromptStreamed
   * Undocumented in the Help Center; present at runtime.
   */
  executePromptStreamed: llm['evaluatePromptStreamed'];

  getRemainingFreeUsage: {

    /**
     * Gets the remaining free generation usage for the current month
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014102816}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014102816.html}
     *
     * @governance none
     * @since 2024.1
     */
    (): number;

    /**
     * Gets the remaining free generation usage for the current month asynchronously
     *
     * @governance none
     * @since 2024.1
     */
    promise(): Promise<number>;
  };

  getRemainingFreeEmbedUsage: {

    /**
     * Gets the remaining free embedding usage for the current month (separate pool from generation)
     * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_77083006042}
     * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_77083006042.html}
     *
     * @governance none
     * @since 2025.1
     */
    (): number;

    /**
     * Gets the remaining free embedding usage for the current month asynchronously
     *
     * @governance none
     * @since 2025.1
     */
    promise(): Promise<number>;
  };

  getRemainingConcurrency: {

    /**
     * Gets the remaining number of concurrent generation requests allowed
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    (): number;

    /**
     * Gets the remaining number of concurrent generation requests allowed asynchronously
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    promise(): Promise<number>;
  };

  getRemainingEmbedConcurrency: {

    /**
     * Gets the remaining number of concurrent embedding requests allowed
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    (): number;

    /**
     * Gets the remaining number of concurrent embedding requests allowed asynchronously
     * Undocumented in the Help Center; present at runtime.
     *
     * @governance none
     */
    promise(): Promise<number>;
  };
}

declare namespace llm {

  /**
   * Role (author) of a chat message
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1015044805}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1015044805.html}
   *
   * @since 2024.1
   */
  export enum ChatRole {
    CHATBOT = 'CHATBOT',
    USER = 'USER',
    /** Undocumented in the Help Center; present at runtime. */
    TOOL = 'TOOL',
  }

  /**
   * LLM model family. Values are the underlying OCI Generative AI model identifiers.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1014101247}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1014101247.html}
   *
   * @since 2024.2
   */
  export enum ModelFamily {
    COHERE_COMMAND = 'cohere.command-a-03-2025',
    COHERE_COMMAND_LATEST = 'cohere.command-a-03-2025',
    GPT_OSS = 'openai.gpt-oss-120b',
    GPT_OSS_LATEST = 'openai.gpt-oss-120b',
  }

  /**
   * Embedding model family. Values are the underlying OCI Generative AI model identifiers.
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_36111753207}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_36111753207.html}
   *
   * @since 2025.1
   */
  export enum EmbedModelFamily {
    COHERE_EMBED = 'cohere.embed-v4.0',
    COHERE_EMBED_LATEST = 'cohere.embed-v4.0',
  }

  /**
   * How to truncate inputs to embed that exceed the model's token limit
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_23112904019}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_23112904019.html}
   *
   * @since 2025.1
   */
  export enum Truncate {
    START = 'START',
    END = 'END',
    NONE = 'NONE',
  }

  /**
   * Safety mode applied to a generation request
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_0804070845}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0804070845.html}
   *
   * @since 2025.1
   */
  export enum SafetyMode {
    CONTEXTUAL = 'CONTEXTUAL',
    STRICT = 'STRICT',
  }

  /**
   * Amount of web-search context to use during generation
   * Undocumented in the Help Center; present at runtime.
   */
  export enum WebSearchContext {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
  }

  /**
   * Verbosity of the generated response
   * Undocumented in the Help Center; present at runtime.
   */
  export enum Verbosity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
  }

  /**
   * Amount of reasoning effort the model should apply
   * Undocumented in the Help Center; present at runtime.
   */
  export enum ReasoningEffort {
    MINIMAL = 'MINIMAL',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
  }

  /**
   * Data type of a tool parameter
   * Undocumented in the Help Center; present at runtime.
   */
  export enum ToolParameterType {
    BOOLEAN = 'BOOLEAN',
    INTEGER = 'INTEGER',
    FLOAT = 'FLOAT',
    STRING = 'STRING',
    OBJECT = 'OBJECT',
    ARRAY = 'ARRAY',
  }

  /**
   * A single chat message (one turn in a conversation)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1015043130}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1015043130.html}
   *
   * @since 2024.1
   */
  export interface ChatMessage {

    /**
     * Text of the chat message
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly text: string;

    /**
     * Author of the chat message
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly role: llm.ChatRole;

    /**
     * Tool calls requested by the LLM in this message
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly toolCalls: llm.ToolCall[];

    /**
     * Tool results carried by this message
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly toolResults: llm.ToolResult[];

    /**
     * Convert to JSON object
     *
     * @since 2024.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ChatMessage)
     *
     * @since 2024.1
     */
    toString(): 'llm.ChatMessage';
  }

  /**
   * Response returned by the LLM from a (non-streamed) generation
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_1015033509}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1015033509.html}
   *
   * @since 2024.1
   */
  export interface Response {

    /**
     * Text returned by the LLM
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly text: string;

    /**
     * Model used to produce the LLM response
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly model: string;

    /**
     * Chat history including this response
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly chatHistory: llm.ChatMessage[];

    /**
     * Source documents that were provided for retrieval-augmented generation (RAG)
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly documents: llm.Document[];

    /**
     * Citations identifying which source documents the response drew from
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly citations: llm.Citation[];

    /**
     * Token usage for the request
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly usage: llm.Usage;

    /**
     * Tool calls requested by the LLM
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly toolCalls: llm.ToolCall[];

    /**
     * Convert to JSON object
     *
     * @since 2024.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.Response)
     *
     * @since 2024.1
     */
    toString(): 'llm.Response';
  }

  /**
   * Response returned by the LLM from a streamed generation
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_13082058358}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_13082058358.html}
   *
   * @since 2025.1
   */
  export interface StreamedResponse {

    /**
     * Returns an iterator over the response as the LLM streams it. Consume it with `each(callback)` -
     * the callback receives a token whose `value` is the next text chunk (a string) and returns true
     * to keep iterating or false to stop - or with `next()`. The text-bearing accessors below
     * (text/model/chatHistory/citations/toolCalls) populate as the stream is consumed; reading them
     * before the stream has been consumed throws UNEXPECTED_ERROR at runtime.
     *
     * @since 2025.1
     */
    iterator(): NetSuiteIterator<string>;

    /**
     * Text returned by the LLM (accumulates as the stream is consumed)
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly text: string;

    /**
     * Model used to produce the LLM response
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly model: string;

    /**
     * Chat history including this response
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly chatHistory: llm.ChatMessage[];

    /**
     * Source documents that were provided for retrieval-augmented generation (RAG)
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly documents: llm.Document[];

    /**
     * Citations identifying which source documents the response drew from
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly citations: llm.Citation[];

    /**
     * Tool calls requested by the LLM
     * Undocumented in the Help Center; present at runtime.
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly toolCalls: llm.ToolCall[];

    /**
     * Convert to JSON object
     *
     * @since 2025.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.StreamedResponse)
     *
     * @since 2025.1
     */
    toString(): 'llm.StreamedResponse';
  }

  /**
   * Token usage for an LLM request
   *
   * @since 2025.1
   */
  export interface Usage {

    /**
     * Total number of tokens consumed (prompt + completion)
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly totalTokens: number;

    /**
     * Number of tokens in the prompt
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly promptTokens: number;

    /**
     * Number of tokens in the completion
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly completionTokens: number;

    /**
     * Convert to JSON object
     *
     * @since 2025.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.Usage)
     *
     * @since 2025.1
     */
    toString(): 'llm.Usage';
  }

  /**
   * A citation linking part of a response back to source documents
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_56082143862}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_56082143862.html}
   *
   * @since 2025.1
   */
  export interface Citation {

    /**
     * IDs of the source documents this citation refers to
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly documentIds: string[];

    /**
     * Start index (within the response text) of the cited span
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly start: number;

    /**
     * End index (within the response text) of the cited span
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly end: number;

    /**
     * The cited text span
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly text: string;

    /**
     * Convert to JSON object
     *
     * @since 2025.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.Citation)
     *
     * @since 2025.1
     */
    toString(): 'llm.Citation';
  }

  /**
   * A source document provided to the LLM for retrieval-augmented generation (RAG)
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_73085600635}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_73085600635.html}
   *
   * @since 2025.1
   */
  export interface Document {

    /**
     * Identifier for the document (referenced by Citation.documentIds)
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly id: string;

    /**
     * Text content of the document
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly data: string;

    /**
     * Convert to JSON object
     *
     * @since 2025.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.Document)
     *
     * @since 2025.1
     */
    toString(): 'llm.Document';
  }

  /**
   * Response returned by embed - vector embeddings for the given inputs
   * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_40085011867}
   * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_40085011867.html}
   *
   * @since 2025.1
   */
  export interface EmbedResponse {

    /**
     * Vector embeddings, one array of numbers per input (parallel to inputs).
     * A 2-D array (number[][]): one 1536-length vector per input, not the single number[] the Help Center shows.
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly embeddings: number[][];

    /**
     * The input strings that were embedded
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly inputs: string[];

    /**
     * Model used to produce the embeddings
     *
     * @since 2025.1
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */
    readonly model: string;

    /**
     * Convert to JSON object
     *
     * @since 2025.1
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.EmbedResponse)
     *
     * @since 2025.1
     */
    toString(): 'llm.EmbedResponse';
  }

  /**
   * A tool the LLM can request to call during generation (created with createTool).
   * Undocumented in the Help Center; present at runtime.
   */
  export interface Tool {

    /**
     * Name of the tool
     */
    readonly name: string;

    /**
     * Description of what the tool does
     */
    readonly description: string;

    /**
     * Parameters the tool accepts
     */
    readonly parameters: llm.ToolParameter[];

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.Tool)
     */
    toString(): 'llm.Tool';
  }

  /**
   * A parameter definition for a Tool (created with createToolParameter).
   * Undocumented in the Help Center; present at runtime.
   */
  export interface ToolParameter {

    /**
     * Name of the parameter
     */
    readonly name: string;

    /**
     * Description of the parameter
     */
    readonly description: string;

    /**
     * Data type of the parameter
     */
    readonly type: llm.ToolParameterType;

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ToolParameter)
     */
    toString(): 'llm.ToolParameter';
  }

  /**
   * A request from the LLM to call a tool, found in Response.toolCalls.
   * Undocumented in the Help Center; present at runtime.
   */
  export interface ToolCall {

    /**
     * Name of the tool the LLM is requesting to call
     */
    readonly name: string;

    /**
     * Identifier for this tool call (null when the model does not supply one)
     */
    readonly id: string | null;

    /**
     * Arguments for the call, keyed by parameter name (e.g. { location: 'Paris' })
     */
    readonly parameters: { [key: string]: unknown };

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ToolCall)
     */
    toString(): 'llm.ToolCall';
  }

  /**
   * The result of running a tool, returned to the LLM (created with createToolResult).
   * Undocumented in the Help Center; present at runtime.
   */
  export interface ToolResult {

    /**
     * The tool call this result responds to
     */
    readonly call: llm.ToolCall;

    /**
     * The output objects produced by running the tool
     */
    readonly outputs: object[];

    /**
     * Convert to JSON object
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ToolResult)
     */
    toString(): 'llm.ToolResult';
  }

  /**
   * Configuration for unlimited usage through a customer-owned OCI Generative AI cluster
   *
   * @since 2024.1
   */
  export interface OciConfig {

    /**
     * Tenancy OCID
     *
     * @since 2024.1
     */
    tenancyId: string;

    /**
     * Compartment OCID
     *
     * @since 2024.1
     */
    compartmentId: string;

    /**
     * User OCID
     *
     * @since 2024.1
     */
    userId: string;

    /**
     * Endpoint ID (needed when a custom OCI cluster is to be used)
     *
     * @since 2024.1
     */
    endpointId: string;

    /**
     * Fingerprint of the public key (must be an API secret)
     *
     * @since 2024.1
     */
    fingerprint: `custsecret${string}` | string;

    /**
     * Private key of the OCI user (must be an API secret)
     *
     * @since 2024.1
     */
    privateKey: `custsecret${string}` | string;
  }

  /**
   * Model parameters for a generation request
   *
   * @since 2024.1
   */
  export interface ModelParameters {

    /**
     * Must be between 0 and 4000 inclusively.
     * Maximum number of tokens the LLM is allowed to generate.
     * The average number of tokens per word is 3.
     *
     * @since 2024.1
     */
    maxTokens?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * A lower value works best for responses that need to be more factual or accurate.
     * A higher value works best for getting more creative responses.
     *
     * @since 2024.1
     */
    temperature?: number;

    /**
     * Must be between 0 and 500 inclusively.
     * How many tokens are considered for generation at each step.
     *
     * @since 2024.1
     */
    topK?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * The probability which ensures that only the most likely tokens with total probability mass of p are considered for generation at each step.
     * If both `topK` and `topP` are set, `topP` acts after `topK`.
     *
     * @since 2024.1
     */
    topP?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * Must not be used with `presencePenalty`.
     * The higher the value, the stronger a penalty is applied to previously present tokens,
     * proportional to how many times they have already appeared in the prompt or prior generation.
     *
     * @since 2024.1
     */
    frequencyPenalty?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * Must not be used with `frequencyPenalty`.
     * Similar to `frequencyPenalty` except that this penalty is applied equally to
     * all tokens that have already appeared regardless of their exact frequencies.
     *
     * @since 2024.1
     */
    presencePenalty?: number;
  }
}
