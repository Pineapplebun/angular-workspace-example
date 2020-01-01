# Angular Workspace Example

## Preface

This is an example of how to use `npm link` with a published library in an Angular Workspace environment.
There are 2 packages published with this repository:

- @pineapplebun/angular-workspace-example-buttons
- @pineapplebun/angular-workspace-example-api

The app uses both of these published libraries, but the buttons library is not implemented with a button.
We would like to use a button implementation for the next version which has already been done. We just need to test its integration now using `npm link`.

## Steps

1. Run `npm i` in the `workspace` directory and run `npm start`, you should be able to see the starting page on `localhost:4200`
2. Run `ng build buttons` to make `dist/buttons`
3. Go to `dist/buttons` and run `npm link`
4. Go to `workspace` and run `npm link "@pineapplebun/angular-workspace-example-buttons"`
5. Observe that the button implementation shows up and opens an alert dialog on `localhost:4200`
6. To unlink, run `npm unlink "@pineapplebun/angular-workspace-example-buttons"` in `workspace` directory, and run `npm unlink` in `dist/buttons`
