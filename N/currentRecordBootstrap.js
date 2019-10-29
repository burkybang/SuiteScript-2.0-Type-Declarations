/**
 * SuiteScript Form Record Bootstrap Module
 *
 * @module N/currentRecordBootstrap
 * @suiteScriptVersion 2.x
 *
 */
function currentRecordBootstrap() {
}

/**
 * Return {Record} [singleton DR-based current record object, if one was already created by a prior call to
 * getModuleInstance(), otherwise, returnes undefined]
 */
function getCurrentRecord() {
}

/**
 * Create current record using promise
 *
 * @param rawRecord
 * @return {Record|SuiteScriptError}
 */
function getModuleInstance() {
}

currentRecordBootstrap = new currentRecordBootstrap();
/**
 * @type {currentRecordBootstrap}
 */
N.prototype.currentRecordBootstrap = currentRecordBootstrap;