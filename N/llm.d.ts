/// <reference path="./error.d.ts" />

/**
 * SuiteScript Learning Language Model module
 *
 * @module N/llm
 * @NApiVersion 2.x
 */
interface llm {

  query: {
    /**
     * Query the learning language model
     *
     * @param options
     * @param options.prompt
     * @param [options.timeout = 30000]
     * @param [options.ociConfig]
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 1,
     *   presencePenalty: 1,
     * }]
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if ociConfig.fingerprint or ociConfig.privateKey does not start with 'custsecret'
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if modelParameters.maxTokens is not between 0 and 4096
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if modelParameters.temperature is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if modelParameters.topK is not between 0 and 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if modelParameters.topP is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if modelParameters.frequencyPenalty is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if modelParameters.presencePenalty is not between 0 and 1
     */
    (options: {
      prompt: string,
      timeout?: number,
      ociConfig?: llm.OciConfig,
      modelParameters: llm.ModelParameters,
    }): string;

    /**
     * Query the learning language model asynchronously
     *
     * @param options
     * @param options.prompt
     * @param [options.timeout = 30000]
     * @param [options.ociConfig]
     * @param [options.modelParameters = {
     *   maxTokens: 2000,
     *   temperature: 0.2,
     *   topK: 500,
     *   topP: 0.7,
     *   frequencyPenalty: 1,
     *   presencePenalty: 1,
     * }]
     *
     * @since 2024.1
     *
     * @throws {error.SuiteScriptError} ONLY_API_SECRET_IS_ACCEPTED if ociConfig.fingerprint or ociConfig.privateKey does not start with 'custsecret'
     * @throws {error.SuiteScriptError} INVALID_MAX_TOKENS_VALUE if modelParameters.maxTokens is not between 0 and 4096
     * @throws {error.SuiteScriptError} INVALID_TEMPERATURE_VALUE if modelParameters.temperature is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_TOP_K_VALUE if modelParameters.topK is not between 0 and 500
     * @throws {error.SuiteScriptError} INVALID_TOP_P_VALUE if modelParameters.topP is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_FREQUENCY_PENALTY_VALUE if modelParameters.frequencyPenalty is not between 0 and 1
     * @throws {error.SuiteScriptError} INVALID_PRESENCE_PENALTY_VALUE if modelParameters.presencePenalty is not between 0 and 1
     */
    promise(options: {
      prompt: string,
      timeout?: number,
      ociConfig?: llm.OciConfig,
      modelParameters: llm.ModelParameters,
    }): Promise<string>;
  };

  getRemainingFreeUsage: {
    /**
     * Get the remaining free usage of the learning language model
     *
     * @since 2024.1
     */
    (): number;

    /**
     * Get the remaining free usage of the learning language model asynchronously
     *
     * @since 2024.1
     */
    promise(): Promise<number>;
  };
}

/**
 *
 */
declare namespace llm {

  export interface OciConfig {
    tenancyId: string;
    compartmentId: string;
    userId: string;
    fingerprint: string | `custsecret${string}`;
    privateKey: string | `custsecret${string}`;
    endpointId: string;
  }

  export interface ModelParameters {
    /**
     * Must be between 0 and 4096
     */
    maxTokens: number;
    /**
     * Must be between 0 and 1
     */
    temperature: number;
    /**
     * Must be between 0 and 500
     */
    topK: number;
    /**
     * Must be between 0 and 1
     */
    topP: number;
    /**
     * Must be between 0 and 1
     */
    frequencyPenalty: number;
    /**
     * Must be between 0 and 1
     */
    presencePenalty: number;
  }
}