polarity.export = PolarityComponent.extend({
  details: Ember.computed.alias('block.data.details'),
  timezone: Ember.computed("Intl", function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }),
  actions: {
    toggleContentSnippet: function (index) {
      const showContentSnippetKey = `details.content.${index}.showContentSnippet`;
      const showContentSnippet = this.get(showContentSnippetKey);
      console.log( index, showContentSnippetKey, showContentSnippet);
      this.set(showContentSnippetKey, !showContentSnippet);
      this.get('block').notifyPropertyChange('data');
    }
  }
});
