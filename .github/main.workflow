workflow "Run tests" {
  on = "push"
  resolves = [
    "Test",
    "Prettier",
  ]
}

action "Install Dependencies" {
  uses = "CultureHQ/actions-yarn@master"
  args = ["install"]
}

action "Prettier" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = ["lint"]
}

action "Build" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = ["build"]
}

action "Test" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Build"]
  args = ["coverage"]
}
