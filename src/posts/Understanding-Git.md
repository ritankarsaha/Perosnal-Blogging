---
title: "Understanding Git and Github"
description: 'A dive into the most commonly used Git Commands for Version Control and Effecient Software Development'
published: true
date: '2025-05-25'
slug: 'Understanding-Git'
tags: ['Version Control', 'Git','All']
---

## Understanding Git and Github

Well if you are in the field of <b>`software engineering`</b> it is customary for you to know proper version control and how prodution-grade software is managed and maintained. 

Multiple people pushing the same changes in the same file at the same time. Sounds messy right ?
That's where <b>`Git`</b> comes in. No matter which technology you use, as long as you are in <b>`software development`</b> you will be using version control.

Before we dive deeper, let's clear a common misconception. <b>`Git is not Github, Github is not Git`</b> 😭. `Git` is the `version control software` you will be using to manage your `workflow in your repositories and stuff`. `Github` is the `software or application` that is built on Git to make the interface more engaging and better. There are other softwares using `Git` as their `primary version control` tool as well like `BitBucket, GitLab` etc. 

Much with introductions, let's dive into the main stuff. 

## Git Commands -- 

To spring things off let's begin with a few basic Git Commands -- 

### Configuring Git -- 

```bash
git config --global user.name "Your Name" #This sets your username 
```
```bash
git config --global user.email "you@example.com" #This sets your email attached to your github account 
```

### To initialise your project with an empty git folder -- 

```bash
git init
```
This is the main secret file created inside your project that tracks the multiple copies of the same project, manages all the branches of the project you are working on and compares the branch changes with the `main` or the `primary` branch of the project during a PR.

### Cloning a Project -- 

Want to bring on a project you like from github to your local machine ? 

```bash
git clone <repo_url>
```
### Status of the Working Branch -- 

Check the status of the files in the working branch you have changed.

```bash
git status
```

This command displays all files with changes in the working directory. It lists untracked (new) files, modified files that haven’t been staged, and files that have been staged but not yet committed.

### Adding, Commiting and Pushing -- 

Made changes to your files in a branch ? And you want those to reflect back in your github repository. In other words we say pushing those changes onto the Github Repository. 

Adding the changed files -- 
```bash
git add <file-name>  # Adds the specific files only
```

```bash
git add . # Adds all the files at one go 
```

Commiting the changes -- 
```bash
git commit -m "(feat/fix/change/etc):  Description of the change"
```

Pushing on the changes to your repository
```bash
git push origin <branch-name> # Pushes the commits onto the proper branch
```

### Branching and Merging --

Let's List some branching and Merging Commands as well 

```bash
git branch  
```
This command is used to list all the branches that are present in your local working directory. Not necessarily all the branches that are shown have been pushed on to Github. It shows all branches that you have made while working.

```bash
git branch <name> # Create a new branch.
```

Helps you in creating a new branch

```bash
git checkout <branch> #Switch to a branch.
```

```bash
git switch <branch> # Modern way to switch branches.
```

```bash
git switch -c <branch> # Create and switch to a new branch.
```
Switch to another branch from one branch

```bash
git checkout -b <new-branch-name> <source-branch-name>
```
This is the newer version of the same command

```bash
git switch -c <new-branch-name> <source-branch-name>
```

> I personally prefer these commands(specifying the parent and child branch names both) coz it makes switching branches easier and more transparent.

```bash
git merge <branch> # Merge another branch into current.
```

### Checking History and Logs -- 

How about checking some history and logs ? 

```bash
git log # Show commit history.
```

```bash
git log --oneline # Condensed commit history.
```
This is mostly used while rebasing and stuff, we will come to this in the next segment.

```bash
git diff # View unstaged changes.
```

```bash
git diff --staged # View staged changes.
```

```bash
git show <commit> # Show details of a specific commit.
```

### Restoring Changes --

Made some changes you wish to revert back ? Follow these commands below -- 🥲

```bash
git restore <file> # Discard changes in working directory.
```

```bash
git restore --staged <file> # Unstage a file.
```

```bash
git reset <file> – # Also unstages a file (older method).
```

```bash
git reset --soft HEAD~1 – # Undo last commit, keep changes staged.
```

Use this, when you have commited some changes, and you want to un-commit them but you want to keep you files(changes) added. 

```bash
git reset --hard HEAD~1 – Undo last commit, discard changes.
```

```bash
git revert <commit> – Revert a commit (safe for shared history).
```
### Stashing --

Okaay you made some changes on a branch, you donot wish to commit them but you need to now move to another branch to make some changes there. Follow the steps .

```bash
git stash # Temporarily save changes on a particular branch .
```

```bash
git stash push -m "Your message here" # Save changes temporarily on a particular branch with a message
```

```bash
git stash pop # Reapply all stashed changes. 
```

`git stash pop` applies all your stashed changes on the branch you are running the command on and also removes them from the stack maintained

```bash
git stash list # List all stashes.
```

```bash
git stash pop stash@{<index>}  # Apply only the changes of a particular stash on a branch
```

```bash
git stash drop stash@{<index>}  # Remove the changes of a particular stash.
```

> A very important thing you guys need to remember while working with stash is that, stashing  basically creates a stack. Inside the stack ,it stashes changes for all branches. They are stacked together one above the other. So if you have multiple stashes from multiple branches, and you run a `git stash pop` on any one branch then BOOM!! -- all your stashed changes of all the branches come together in that branch so this is why I prefer stashing particular changes.

<b>TIP -- Stash all your changes of diff branches with a proper commit message and pop them by using the second last command so that things don't get messed up !!</b>

### Some Advanced Git Commands

```bash
git cherry-pick <commit> #Apply a specific commit to current branch.
```

```bash
git bisect #Binary search through history to find a bug.
```

```bash
git reflog #Show all actions (even deleted commits).
```

```bash
git blame <file> #Show who last modified each line of a file
```

### How to Raise a PR properly? 

Lastly to end things let's just see how to raise a PR properly

1. You need to fork the repository you want to contribute to. Click on the `Fork Button` above the repository on Github, give it a suitable name and create a fork !

2. Clone your forked repository !
```bash
git clone https://github.com/your-username/forked-repository.git
```
3. Move into the repository 
```bash
cd repository
```
4. Install the dependencies and other necessary things.
5. Configure the fork by running the below command.
```bash
git remote add upstream https://github.com/original-owner-username/original-repository.git
```
6. You will be on the `main/master/develop` (most common `main` branch names) or any other branch which is `primary branch` for your repository
```bash
git checkout -b new-branch #create a new branch with from `main` with an appropriate name
```
You can do this via VS-Code or your preferred code editor as well.
- Go to the bottom left corner of your VS-Code
- Click on `main` or the branch name visible there. That is prolly ur primary branch for the project
- A pop-up will appear with three options -- 
   - `Create New Branch`
   - `Create New Branch From`
   - `Checkout Detected`
-  Click on `Create New Branch From`
- A list of all your existing branches will come up. Only the `main` or the primary branch of the project will be listed if you have cloned the repository afresh for contributing
- Another popup with a space appears prompting you to give a proper branch name
- Give an approprioate name and hit enter !
- Voila! Your new branch is created from your desired branch. 

> Think of the Git branching system as a tree, where each branch acts like a subtree extending from another. Here's how it works:
- When you create a new branch—say, Branch A—from the main branch, it's like growing a new subtree from the main trunk.
    - At this point, Branch A is an exact copy of main. It inherits all the files, history, and commits that exist in main at the time of creation.
    - You can now make independent changes on Branch A without affecting main.
- Suppose you then make changes on Branch A. Now Branch A diverges from main, containing its own unique commits.
- Next, while you're still on Branch A, you create another branch—Branch B.
    - This time, Branch B will not be a copy of main. Instead, it becomes a copy of Branch A, including all the changes that Branch A contains.
    - So, Branch B branches off from Branch A, not main. It carries forward everything that Branch A has at the moment of its creation.
This tree-based model helps visualize how branches inherit code states and evolve independently unless explicitly merged.

7. Make your changes on that branch.
8. `git add .` or `git add <specific-filename>` to add the files and to stage them
9. `git commit` commands to commit them 
10. `git push origin <branch-name>` to push the changes onto the working branch from which the PR will be made.
11. If you are on VS-Code, a `Create a Pull Request` Option will appear and you can create your pull request from there. Alternatively visit your forked repository and you can create your pull request from that specific branch as well. A `compare and pull request` button pops above. 

This should be more than enough for working with Version Control. In the next blog on Git, I will be back with some more advanced git commands. 😁

Ciao !!

さようなら





