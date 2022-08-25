type TableProps<Type extends string[]> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

class Table<T extends string[]> {
  private static checkColumnsCompatability<Type extends string[]>(
    columns: Type,
    rowsData: Type[],
  ): boolean {
    // Todo: Patikrinti ar stulpelių skaičius yra lygus kiekvienos eilutės stulpelių skaičiui
    console.log(columns, rowsData);
    console.log(('-').repeat(64));
    console.log('Sprendimas ir spausdinimai rašomi čia');

    return true;
  }

  public htmlElement!: HTMLTableElement;

  private props!: TableProps<T>;

  private thead!: HTMLTableSectionElement;

  private tbody!: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    console.log(this.props, this.thead, this.tbody);
    const columnsIsCompatable = Table.checkColumnsCompatability(props.columns, props.rowsData);
    if (!columnsIsCompatable) {
      throw new Error('Lentelės stulpeliai nesuderinti su lentelės duomenimis');
    }
  }
}

export default Table;
