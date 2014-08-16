Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    yieldTemplates: {
        header: {
            to: 'header'
        },
        footer: {
            to: 'footer'
        }
    },
    onBeforeAction: function() {
        $('body').addClass('sticky-footer');
        return $('meta[name^="description"]').remove();
    }
  });