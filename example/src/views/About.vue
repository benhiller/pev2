<template>
  <main-layout is-about>
  <div class="container">
    <h2>
      Disclaimer
    </h2>
    <p>
      This project is a fork of a rewrite of the excellent <a href="https://github.com/AlexTatiyants/pev">Postgres Explain Visualizer (pev)</a>. Kudos go to Alex Tatiyants and Dalibo. I forked it to add a pretty rudimentary and non-ideal way to share query plans via the URL.
    </p>

    <p>
    The pev project was initialy written in early 2016 but seem to be abandoned since then. There was no activity at all for more than <a href="https://github.com/AlexTatiyants/pev/issues/42">3 years and counting</a> though there are <a href="https://github.com/AlexTatiyants/pev/issues">several issues open</a> and relevant pull requests pending.
    </p>


    <p>
    The current project has several goals:
    <ul>
      <li>
        isolate the plan view component and its dependencies in order to use it in
        any web app <i class="fa fa-check text-success"></i>
      </li>
      <li>
        make it work with recent version of JS frameworks <i class="fa fa-check text-success"></i>
      </li>
      <li>
        upgrade Bootstrap to a more recent version <i class="fa fa-check text-success"></i>
      </li>
      <li>
        use VueJS just for a matter of taste <i class="fa fa-check text-success"></i>
      </li>
      <li>
        add ability to parse text format <i class="fa fa-check text-success"></i>
      </li>
      <li>
        add support for new features (parallelism, triggers, disk usage, …)
      </li>
      <li>
        maintain the project to match upgrades in PostgreSQL.
      </li>
    </ul>
    </p>

    <h2>
      Usage tips
    </h2>
    <p>
    To get the most out of it, we recommend generating a query plan using the following line: <code>EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON)</code>. It is recommend submitting a (decently formatted) SQL query that generated the plan.
    </p>

    <h2>
      Help improve PEV2
    </h2>
    <p>
    You can help us.
    </p>

    <p>
    Report issues or contribute to the code on <a href="https://github.com/benhiller/pev2">Github</a> (forked repo).
    </p>

    <hr>
    <div class="text-center text-muted">
      <b>pev2</b> is brought to you by <a href="https://dalibo.com">Dalibo</a>
    </div>
  </div>
  </main-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '../layouts/Main.vue';

@Component({
  components: {
    MainLayout,
  }
})
export default class About extends Vue {
}
</script>
