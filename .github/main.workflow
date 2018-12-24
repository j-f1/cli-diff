workflow "Run tests" {
  on = "push"
  resolves = [
    "Test",
    "Lint",
  ]
}

action "Install Dependencies" {
  uses = "CultureHQ/actions-yarn@master"
  args = ["install"]
}

action "Build" {
  uses = "CultureHQ/actions-yarn@master"
  args = ["build"]
}

action "Test" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Build"]
  args = ["coverage"]
}

action "Lint" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Build"]
  args = ["lint"]
}
