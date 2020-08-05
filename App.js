import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/routes/dep'

import Layout from './src/design-system/layout'
import { Registry, RouteList } from './src/routes/registry';
import { UiContextLayer } from './src/common/context-layers/ui';
import { EnvironmentContextLayer } from './src/common/context-layers/environment';

export default function App() {

  return (
    <EnvironmentContextLayer>
      <Router>
        <UiContextLayer>
          <Layout
            navList={<RouteList></RouteList>}
            main={<Registry></Registry>}
          />
        </UiContextLayer>
      </Router>
    </EnvironmentContextLayer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
