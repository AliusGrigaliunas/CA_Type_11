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
    return rowsData.every((rowData) => rowData.length === columns.length);
  }

  public htmlElement!: HTMLTableElement;

  private props: TableProps<T>;

  // TODO: padaryti private
  public thead: HTMLTableSectionElement;

  private tbody: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    const columnsIsCompatable = Table.checkColumnsCompatability(props.columns, props.rowsData);
    if (!columnsIsCompatable) {
      throw new Error('Lentelės stulpeliai nesuderinti su lentelės duomenimis');
    }

    this.props = props;
    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private initializeHead() {
    const headerHTMLString = this.props.columns
      .map((column) => `<th>${column}</th>`)
      .join('');
    this.thead.innerHTML = `<tr>${headerHTMLString}</tr>`;
  }

  private initialize() {
    this.initializeHead();
  }
}

export default Table;
