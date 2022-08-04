export class Lang {
  tags = ["zh", "en"]

  constructor(public tag: string) {}

  get zh(): boolean {
    return this.tag.startsWith("zh")
  }

  get en(): boolean {
    return !this.zh
  }

  findTagName(tag: string): string {
    switch (tag) {
      case "zh":
        return "中文"
      case "en":
        return "English"
      default:
        return "English"
    }
  }

  get tagName(): string {
    return this.findTagName(this.tag)
  }
}
