/// <reference path="./error.d.ts" />

/**
 * SuiteScript Learning Language Model module
 *
 * @module N/llm
 * @NApiVersion 2.x
 */
interface llm {

  generateText: {

    /**
     * Returns response from the LLM for given prompt
     *
     * @param prompt
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     *
     * @since 2024.2
     */
    (prompt: string): llm.Response;

    /**
     * Returns response from the LLM for given prompt
     *
     * @param options
     * @param options.prompt
     * @param [options.timeout = 30000]
     * @param [options.chatHistory = []]
     * @param [options.preamble]
     * @param [options.ociConfig]
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 0,
     *   presencePenalty: 0,
     * }]
     *
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
     * Returns response from the LLM for given prompt
     *
     * @param prompt
     *
     * @throws {error.SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if prompt is missing
     *
     * @since 2024.2
     */
    promise(prompt: string): Promise<llm.Response>;

    /**
     * Returns response from the LLM for given prompt asynchronously
     *
     * @param options
     * @param options.prompt
     * @param [options.timeout = 30000]
     * @param [options.chatHistory = []]
     * @param [options.preamble]
     * @param [options.ociConfig]
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 0,
     *   presencePenalty: 0,
     * }]
     *
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

  /**
   * Creates a chat massage
   *
   * @since 2024.2
   */
  createChatMessage(options: {
    text: string,
    role: llm.ChatRole | `${llm.ChatRole}`,
  }): llm.ChatMessage;

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
     * @since 2024.2
     */

    tenancyId: string;

    /**
     * @since 2024.2
     */
    compartmentId: string;

    /**
     * @since 2024.2
     */
    userId: string;

    /**
     * Must be an API secret
     *
     * @since 2024.2
     */
    fingerprint: string | `custsecret${string}`;

    /**
     * Must be an API secret
     *
     * @since 2024.2
     */
    privateKey: string | `custsecret${string}`;

    /**
     * @since 2024.2
     */
    endpointId: string;
  }

  /**
   * @since 2024.2
   */
  export interface ModelParameters {

    /**
     * Must be between 0 and 4000 inclusively
     *
     * @since 2024.2
     */
    maxTokens: number;

    /**
     * Must be between 0 and 1 inclusively
     *
     * @since 2024.2
     */
    temperature: number;

    /**
     * Must be between 0 and 500 inclusively
     *
     * @since 2024.2
     */
    topK: number;

    /**
     * Must be between 0 and 1 inclusively
     *
     * @since 2024.2
     */
    topP: number;

    /**
     * Must be between 0 and 1 inclusively
     * Must not be used with presencePenalty
     *
     * @since 2024.2
     */
    frequencyPenalty?: number;

    /**
     * Must be between 0 and 1 inclusively
     * Must not be used with frequencyPenalty
     *
     * @since 2024.2
     */
    presencePenalty?: number;
  }
}