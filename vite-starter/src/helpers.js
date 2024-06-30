export function kebabCaseToTitleCase(colourName) {
    const colourWithSpaces = colourName.replaceAll("-", " ");
    const colourWithCaps = colourWithSpaces.replace(/\b([a-z])/g, (match) => match.toUpperCase());
    return colourWithCaps;
}