import colors from "tailwindcss/colors.js"

export class Theme {
  constructor(public name: string = "red") {}

  get color(): string {
    return (colors as any)[this.name][400]
  }
}
