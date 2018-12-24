import chalk from 'chalk'
import JSDiff from 'diff'

export interface File {
  name?: string
  content: string
  header?: string
}

export interface Options {
  context: number
}

/**
 * Create a ANSI-highlighted diff between the two provided files
 * @param  oldFile The original file. Can be passed as an object or as a plain string.
 * @param  newFile The new file. Can be passed as an object or as a plain string.
 * @param  options (optional) options to pass to JSDiff
 * @return         The ANSI-highlighted diff
 */
export default function diff(
  oldFile: File | string,
  newFile: File | string,
  options?: Options
): string {
  if (typeof oldFile === 'string') {
    oldFile = { content: oldFile }
  }
  if (typeof newFile === 'string') {
    newFile = { content: newFile }
  }

  return (
    JSDiff.createTwoFilesPatch(
      oldFile.name || '',
      newFile.name || '',
      oldFile.content,
      newFile.content,
      oldFile.header || '',
      newFile.header || '',
      options
    )
      .split('\n')
      // remove “Index:” (if files are the same) and “====...”
      .slice(oldFile.name === newFile.name ? 2 : 1)
      // remove +++ and --- lines if the file name and header are blank
      .slice(
        oldFile.name || newFile.name || oldFile.header || newFile.header ? 0 : 2
      )
      .map(chunk => {
        switch (chunk[0]) {
          case '+':
            return chalk.green(chunk)
          case '-':
            return chalk.red(chunk)
          case '@':
            return chalk.dim.blue(chunk)
          default:
            return chunk
        }
      })
      .join('\n')
  )
}
