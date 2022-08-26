type SelectOption = {
  label: string,
  value: string,
};

type SelectFieldProps = {
  label: string,
  options: SelectOption[]
};

class SelectField {
  private static count: number = 0;

  private readonly id: string;

  private props: SelectFieldProps;

  public htmlElement: HTMLDivElement;

  constructor(props: SelectFieldProps) {
    SelectField.count += 1;
    this.id = `SelectField-${SelectField.count}`;
    this.props = props;
    this.htmlElement = document.createElement('div');

    this.initialize();
  }

  private initialize = (): void => {
    const label = document.createElement('label');
    label.innerHTML = `${this.props.label}:`;
    label.className = 'mb-1';
    label.setAttribute('for', this.id);

    const optionsHtmlString = this.props.options
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join('');

    const select = document.createElement('select');
    select.className = 'form-select';
    select.id = this.id;
    select.innerHTML = optionsHtmlString;

    this.htmlElement.className = 'mb-3';
    this.htmlElement.append(
      label,
      select,
    );
  };
}

export default SelectField;
