# Gitree

## Protocol

```
parent-project/
├── .git/
├── child-project1/
│   └── .git/
└── child-project2/
    └── .git/
```

```sh
mkdir parent-project
cd parent-project
git init
mkdir child-project1 child-project2

cd child-project1
git init
cd ../child-project2
git init

cd ..

git submodule add ./child-project1
git submodule add ./child-project2
```

## Ignore Files

- No need to add child projects to `.gitignore` in the parent project.
- Add child projects to `.npmignore` in the parent project to avoid publishing them with the parent project. 

This is your `.npmignore`:

```text
child-project1/
child-project2/
```

## Submodules

Sure, here is a quick rundown on the essential commands for working with Git submodules:

1. **Add a Submodule**: To add a new submodule to your repository, use the following command:

    ```bash
    git submodule add <repository_url> [<path>]
    ```

    The `path` is optional and is the location at which to clone the submodule. If you don't specify a path, Git will use the name of the repository.

2. **Initialize and Update Submodules**: After cloning a project that includes submodules, they will exist as empty directories. To populate the submodule directories, you need to initialize and update them:

    ```bash
    git submodule init
    git submodule update
    ```

3. **Update a Submodule to the Latest Commit**: To update a submodule to the latest commit of its current branch, navigate to the submodule directory and pull the latest changes:

    ```bash
    cd <submodule_directory>
    git pull origin <branch>
    ```

4. **Remove a Submodule**: Removing a submodule involves editing the `.gitmodules` file, deleting the relevant section, and running the following commands:

    ```bash
    git rm --cached <submodule_directory>
    rm -rf .git/modules/<submodule_directory>
    rm -rf <submodule_directory>
    ```

## Git Flow

Git submodules allow you to embed one git repository inside another. The submodule has its own history, and the parent repository also tracks that history.

Let's say you've added some changes to a child project, and you want to commit and push those changes. You'd go through the normal Git flow in the child project's directory:

```bash
cd child-project1
git add .
git commit -m "Commit message"
git push origin main
```

This will push the changes to the child project's repository. 

The parent project tracks the commit that the submodule is at. If you want the parent project to track the latest commit from the child project, you need to commit the updated submodule in the parent project:

```bash
cd ..
git add child-project1
git commit -m "Updated submodule"
git push origin main
```

When someone else clones the parent project or pulls the latest changes, they will need to initialize and update the submodules. If they have already cloned the repository and initialized the submodules, they can update to the latest commit with:

```bash
git submodule update --remote
```

Or if they haven't initialized the submodules yet, they can clone the parent repository and initialize and update the submodules all at once:

```bash
git clone --recurse-submodules git@github.com:username/parent-project.git
```

or if they've already cloned the repository, they can initialize and update all submodules with:

```bash
git submodule update --init --recursive
```

Remember that submodules are a bit more advanced feature of Git and can sometimes be tricky to work with. But once you understand their workflow, they can be very powerful for managing multiple related repositories.
