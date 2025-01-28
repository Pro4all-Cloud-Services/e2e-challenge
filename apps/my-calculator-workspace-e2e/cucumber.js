module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['apps/my-calculator-workspace-e2e/src/steps/**/*.ts'],
    paths: ['apps/my-calculator-workspace-e2e/src/features/**/*.feature'],
  },
};
