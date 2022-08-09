import colors from "tailwindcss/colors"

export class Theme {
  constructor(public name: string = "red") {}

  get color(): string {
    return (colors as any)[this.name][400]
  }
}
