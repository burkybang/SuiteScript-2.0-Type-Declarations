/// <reference path="./error.d.ts" />

/**
 * SuiteScript Learning Language Model module
 *
 * @module N/llm
 * @NApiVersion 2.x
 */
interface llm {

  /**
   * Creates a chat massage
   *
   * @param options
   * @param options.text - text of the chat
   * @param options.role - role (author) of the message
   *
   * @throws {SuiteScriptError} INVALID_CHAT_ROLE when the role for the message is outside of the ChatRole enum
   *
   * @since 2024.2
   */
  createChatMessage(options: {
    text: string,
    role: llm.ChatRole | `${llm.ChatRole}`,
  }): llm.ChatMessage;

  generateText: {

    /**
     * Returns a response from the LLM for the given prompt
     *
     * @param prompt - prompt for the LLM
     *
     * @throws {error.SuiteScriptError} FEATURE_UNAVAILABLE if the learning language model feature is not enabled
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     *
     * @since 2024.2
     */
    (prompt: string): llm.Response;

    /**
     * Returns a response from the LLM for the given prompt
     *
     * @param options
     * @param options.prompt - Prompt for the LLM
     * @param [options.timeout = 30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.chatHistory = []] - Chat history to be taken in consideration
     * @param [options.preamble] - Preamble for the text generation
     * @param [options.ociConfig] - Config needed for unlimited usage
     * @param [options.ociConfig.tenancyId] - Tenancy OCID
     * @param [options.ociConfig.compartmentId] - Compartment OCID
     * @param [options.ociConfig.userId] - User OCID
     * @param [options.ociConfig.endpointId] - Endpoint ID (needed when custom OCI cluster is to be used)
     * @param [options.ociConfig.fingerprint] - Fingerprint of the public key (Must be an API secret)
     * @param [options.ociConfig.privateKey] - Private key of the OCI user (Must be an API secret)
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 0,
     *   presencePenalty: 0,
     * }] - Parameters of the model
     * @param [options.modelParameters.maxTokens = 2000] - Must be between 0 and 4000 inclusively. Maximum number of tokens the LLM is allowed to generate. The average number of tokens per word is 3.
     * @param [options.modelParameters.temperature = 0.2] - Must be between 0 and 1 inclusively. A lower value works best for responses that need to be more factual or accurate. A higher value works best for getting more creative responses.
     * @param [options.modelParameters.topK = 500] - Must be between 0 and 500 inclusively. How many tokens are considered for generation at each step.
     * @param [options.modelParameters.topP = 0.7] - Must be between 0 and 1 inclusively. The probability which ensures that only the most likely tokens with total probability mass of p are considered for generation at each step. If both `topK` and `topP` are set, `topP` acts after `topK`.
     * @param [options.modelParameters.frequencyPenalty = 0] - Must be between 0 and 1 inclusively. Must not be used with `presencePenalty`. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
     * @param [options.modelParameters.presencePenalty = 0] - Must be between 0 and 1 inclusively. Must not be used with `frequencyPenalty`. Similar to `frequencyPenalty` except that this penalty is applied equally to all tokens that have already appeared regardless of their exact frequencies.
     *
     * @throws {error.SuiteScriptError} FEATURE_UNAVAILABLE if the learning language model feature is not enabled
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if uknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topK value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     *
     * @since 2024.2
     */
    (options: {
      prompt: string,
      timeout?: number,
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      ociConfig?: llm.OciConfig,
      modelParameters?: llm.ModelParameters,
    }): llm.Response;

    /**
     * Returns a response from the LLM for the given prompt asynchronously
     *
     * @param prompt
     *
     * @throws {error.SuiteScriptError} FEATURE_UNAVAILABLE if the learning language model feature is not enabled
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     *
     * @since 2024.2
     */
    promise(prompt: string): Promise<llm.Response>;

    /**
     * Returns a response from the LLM for the given prompt asynchronously
     *
     * @param options
     * @param options.prompt - Prompt for the LLM
     * @param [options.timeout = 30000] - Timeout in milliseconds, defaults to 30000
     * @param [options.chatHistory = []] - Chat history to be taken in consideration
     * @param [options.preamble] - Preamble for the text generation
     * @param [options.ociConfig] - Config needed for unlimited usage
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 0,
     *   presencePenalty: 0,
     * }] - Parameters of the model
     * @param [options.modelParameters.maxTokens = 2000] - Must be between 0 and 4000 inclusively. Maximum number of tokens the LLM is allowed to generate. The average number of tokens per word is 3.
     * @param [options.modelParameters.temperature = 0.2] - Must be between 0 and 1 inclusively. A lower value works best for responses that need to be more factual or accurate. A higher value works best for getting more creative responses.
     * @param [options.modelParameters.topK = 500] - Must be between 0 and 500 inclusively. How many tokens are considered for generation at each step.
     * @param [options.modelParameters.topP = 0.7] - Must be between 0 and 1 inclusively. The probability which ensures that only the most likely tokens with total probability mass of p are considered for generation at each step. If both `topK` and `topP` are set, `topP` acts after `topK`.
     * @param [options.modelParameters.frequencyPenalty = 0] - Must be between 0 and 1 inclusively. Must not be used with `presencePenalty`. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
     * @param [options.modelParameters.presencePenalty = 0] - Must be between 0 and 1 inclusively. Must not be used with `frequencyPenalty`. Similar to `frequencyPenalty` except that this penalty is applied equally to all tokens that have already appeared regardless of their exact frequencies.
     *
     * @throws {error.SuiteScriptError} FEATURE_UNAVAILABLE if the learning language model feature is not enabled
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS both presencePenalty and frequencyPenalty are used in model parameters
     * @throws {error.SuiteScriptError} UNRECOGNIZED_MODEL_PARAMETERS if uknown model parameter has been used
     * @throws {error.SuiteScriptError} UNRECOGNIZED_OCI_CONFIG_PARAMETERS if unknown parameter for OCI configuration has been used
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if privateKey or fingerprint are not API secrets
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if maxTokens value is less than 0 or greater than 4000
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if temperature value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if topK value is less than 0 or greater than 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if topK value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if frequencyPenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if presencePenalty value is less than 0 or greater than 1
     * @throws {error.SuiteScriptError} MAXIMUM_PARALLEL_REQUESTS_LIMIT_EXCEEDED if number of parallel requests to the LLM is greater than 5
     *
     * @since 2024.2
     */
    promise(options: {
      prompt: string,
      timeout?: number,
      chatHistory?: llm.ChatMessage[],
      preamble?: string,
      ociConfig?: llm.OciConfig,
      modelParameters?: llm.ModelParameters,
    }): Promise<llm.Response>;
  };

  getRemainingFreeUsage: {

    /**
     * Get the remaining free usage of the LLM for the current month
     *
     * @since 2024.2
     */
    (): number;

    /**
     * Get the remaining free usage of the LLM for the current month asynchronously
     *
     * @since 2024.2
     */
    promise(): Promise<number>;
  };
}

/**
 * @since 2024.2
 */
declare namespace llm {

  /**
   * @since 2024.2
   */
  export enum ChatRole {
    CHATBOT = 'CHATBOT',
    USER = 'USER',
  }

  /**
   * @since 2024.2
   */
  export interface ChatMessage {

    /**
     * Text of the chat message
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2024.2
     */
    readonly text: string;

    /**
     * Author of the chat message
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2024.2
     */
    readonly role: llm.ChatRole;

    /**
     * Convert to JSON object
     *
     * @since 2024.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ChatMessage)
     *
     * @since 2024.2
     */
    toString(): 'llm.ChatMessage';
  }

  /**
   * @since 2024.2
   */
  export interface Response {

    /**
     * Text returned by the LLM
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2024.2
     */
    readonly text: string;

    /**
     * Chat history
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2024.2
     */
    readonly chatHistory: ChatMessage[];

    /**
     * Model used to produce the LLM Response
     *
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2024.2
     */
    readonly model: string;

    /**
     * Convert to JSON object
     *
     * @since 2024.2
     */
    toJSON(): ExcludeMethods<this>;

    /**
     * Returns the object type name (llm.ChatMessage)
     *
     * @since 2024.2
     */
    toString(): 'llm.Response';
  }

  /**
   * @since 2024.2
   */
  export interface OciConfig {

    /**
     * Tenancy OCID
     *
     * @since 2024.2
     */
    tenancyId: string;

    /**
     * Compartment OCID
     *
     * @since 2024.2
     */
    compartmentId: string;

    /**
     * User OCID
     *
     * @since 2024.2
     */
    userId: string;

    /**
     * Endpoint ID (needed when custom OCI cluster is to be used)
     *
     * @since 2024.2
     */
    endpointId: string;

    /**
     * Fingerprint of the public key (Must be an API secret)
     *
     * @since 2024.2
     */
    fingerprint: `custsecret${string}` | string;

    /**
     * Private key of the OCI user (Must be an API secret)
     *
     * @since 2024.2
     */
    privateKey: `custsecret${string}` | string;
  }

  /**
   * @since 2024.2
   */
  export interface ModelParameters {

    /**
     * Must be between 0 and 4000 inclusively.
     * Maximum number of tokens the LLM is allowed to generate.
     * The average number of tokens per word is 3.
     *
     * @since 2024.2
     */
    maxTokens?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * A lower value works best for responses that need to be more factual or accurate.
     * A higher value works best for getting more creative responses.
     *
     * @since 2024.2
     */
    temperature?: number;

    /**
     * Must be between 0 and 500 inclusively.
     * How many tokens are considered for generation at each step.
     *
     * @since 2024.2
     */
    topK?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * The probability which ensures that only the most likely tokens with total probability mass of p are considered for generation at each step.
     * If both `topK` and `topP` are set, `topP` acts after `topK`.
     *
     * @since 2024.2
     */
    topP?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * Must not be used with `presencePenalty`.
     * The higher the value, the stronger a penalty is applied to previously present tokens,
     * proportional to how many times they have already appeared in the prompt or prior generation.
     *
     * @since 2024.2
     */
    frequencyPenalty?: number;

    /**
     * Must be between 0 and 1 inclusively.
     * Must not be used with `frequencyPenalty`.
     * Similar to `frequencyPenalty` except that this penalty is applied equally to
     * all tokens that have already appeared regardless of their exact frequencies.
     *
     * @since 2024.2
     */
    presencePenalty?: number;
  }
}