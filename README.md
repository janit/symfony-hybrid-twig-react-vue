A Symfony hybrid app sharing state object with Twig, React and Vue
==========

A Symfony project created on January 14, 2017, 9:23 am.

An effort to provide a working  example concept of simply
sharing a state object between the Twig template rendering engine
as well as JavaScript view layers Vue and React.

This introduces no complexity of server side rendering for decent
performance, but SSR can be done as an enhancement for improved
performance and SEO: <a href="https://www.symfony.fi/entry/introduction-to-react-js-components-and-server-side-rendering-in-php">Introduction to React.js Components and Server Side Rendering in PHP</a>, <a href="https://www.symfony.fi/entry/testing-react-js-isomorphic-rendering-with-php-v8js-and-the-symfony-microkernel">Testing React.js isomorphic rendering with php-v8js and the Symfony Microkernel</a>

This will just handle the sharing of initial state on page load
and you'll need to then take over your state management in your
front end using some kind of tools for that, e.g. MobX, Redux.
There is also a simple API backend that also returns the same
object and keeps things predictable for developers.

The application comes complete with an SQLite database and built
JavaScript clients to keep overhead of installation minimal. The
application itself is simple enough to figure out with basic
understanding of OO PHP and Symfony, so it's better just to take
a look for yourself to see if this feels like a good idea or not.

## Installation

Clone app:

```
git clone git@github.com:janit/symfony-hybrid-twig-react-vue.git
```

Install dependencies:

```
composer install
```

Run:

```
./bin/console server:run
```

Open app in browser: http://localhost:8000

## JavaScript builds



## Background information to follow

As a bonus I will be adding example TypeScript Type Definitions
for the example animation of how it is like to work with TypeScript
and how you could benefit from using strong types in your front
end development workflow.

An article with the background is published here: <a href="https://www.symfony.fi/entry/sharing-state-in-a-symfony-hybrid-app-with-twig-react-etc">Sharing state in a Symfony hybrid with Twig, React and other JavaScript apps</a>
