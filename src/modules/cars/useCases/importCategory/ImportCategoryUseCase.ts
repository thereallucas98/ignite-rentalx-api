import fs from "fs";
import csvParse from "csv-parse";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void  {
    const stream = fs.createReadStream(file.path); // Criando uma stream de leitura e passa o caminho
    
    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };