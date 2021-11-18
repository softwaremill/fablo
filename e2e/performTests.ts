import TestCommands from "./TestCommands";

const testFilesExistence = (config: string, files: string[]) => {
  it(`should create proper files from ${config}`, () => {
    expect(files).toMatchSnapshot();
  });
};

const testFilesContent = (commands: TestCommands, config: string, files: string[]) =>
  files.forEach((f) => {
    it(`should create proper ${f} from ${config}`, () => {
      const content = commands.getFileContent(`${commands.relativeRoot}/${f}`);
      const cleaned = content
        .replace(/FABLO_BUILD=(.*?)(\n|$)/g, "FABLO_BUILD=<date with git hash>\n")
        .replace(/FABLO_CONFIG=(.*?)(\n|$)/g, "FABLO_CONFIG=<absolute path>\n")
        .replace(/CHAINCODES_BASE_DIR=(.*?)(\n|$)/g, "CHAINCODES_BASE_DIR=<absolute path>\n")
        .replace(/COMPOSE_PROJECT_NAME=(.*?)(\n|$)/g, "COMPOSE_PROJECT_NAME=<name with timestamp>\n");
      expect(cleaned).toMatchSnapshot();
    });
  });

export default (config: string): void => {
  const commands = new TestCommands(`e2e/__tmp__/${config}.tmpdir`);
  commands.cleanupWorkdir();
  commands.fabloExec(`generate "${commands.relativeRoot}/${config}"`);

  const files = commands.getFiles();
  testFilesExistence(config, files);
  testFilesContent(commands, config, files);
};