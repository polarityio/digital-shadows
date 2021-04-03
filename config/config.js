module.exports = {
  /**
   * Name of the integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @required
   */
  name: 'Digital Shadows',
  /**
   * The acronym that appears in the notification window when information from this integration
   * is displayed.  Note that the acronym is included as part of each "tag" in the summary information
   * for the integration.  As a result, it is best to keep it to 4 or less characters.  The casing used
   * here will be carried forward into the notification window.
   *
   * @type String
   * @required
   */
  acronym: 'DS',
  onDemandOnly: false,
  defaultColor: 'light-pink',
  /**
   * Description for this integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @optional
   */
  description:
    'Digital Shadows minimizes digital risk by identifying unwanted exposure and protecting against external threats.',
  entityTypes: ['domain', 'ipv4', 'cve', 'hash', 'email'],
  /**
   * Provide custom component logic and template for rendering the integration details block.  If you do not
   * provide a custom template and/or component then the integration will display data as a table of key value
   * pairs.
   *
   * @type Object
   * @optional
   */
  styles: ['./styles/style.less'],
  block: {
    component: {
      file: './components/block.js'
    },
    template: {
      file: './templates/block.hbs'
    }
  },
  request: {
    // Provide the path to your certFile. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    cert: '',
    // Provide the path to your private key. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    key: '',
    // Provide the key passphrase if required.  Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    passphrase: '',
    // Provide the Certificate Authority. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    ca: '',
    // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
    // the url parameter (by embedding the auth info in the uri)
    proxy: '',

    rejectUnauthorized: true
  },
  logging: {
    level: 'info' //trace, debug, info, warn, error, fatal
  },
  options: [
    {
      key: 'url',
      name: 'Base URL for the Digital Shadows API',
      description: 'The base URL for the Digital Shadows API including the schema (i.e., https://)',
      type: 'text',
      default: 'https://portal-digitalshadows.com/api',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'apiKey',
      name: 'API Key',
      description: 'Valid Digital Shadows API Key. Can be found in your account settings. ',
      default: '',
      type: 'password',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'apiSecret',
      name: 'API Secret',
      description: 'Valid Digital Shadows API Secret Key. The secret key can be found in association with the api key.',
      default: '',
      type: 'password',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'resultCount',
      name: 'Maximum Number of Results',
      description:
        'The maximum number of API search results that will be displayed in the Polarity Overlay window. (Default: 20)',
      default: 20,
      type: 'number',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'types',
      name: 'Record Types',
      description:
        'Restrict the result types to only those selected. At least one value is required. CLOSED_SOURCES, INCIDENTS, INDICATOR_FEED, INTELLIGENCE, TECHNICAL_SOURCE, VULNERABILITY_EXPLOIT, WHOIS and WEB_SOURCE act as groupings of multiple types.',
      default: [
        {
          value: 'ACTORS',
          display: 'ACTORS'
        },
        {
          value: 'AGGREGATE_DATA_BREACH',
          display: 'AGGREGATE_DATA_BREACH'
        },
        {
          value: 'BLOG_POST',
          display: 'BLOG_POST'
        },
        {
          value: 'CAMPAIGNS',
          display: 'CAMPAIGNS'
        },
        {
          value: 'CHAT_MESSAGE',
          display: 'CHAT_MESSAGE'
        },
        {
          value: 'CLIENT_INCIDENT',
          display: 'CLIENT_INCIDENT'
        },
        {
          value: 'CLOSED_SOURCES',
          display: 'CLOSED_SOURCES'
        },
        {
          value: 'DATA_BREACH',
          display: 'DATA_BREACH'
        },
        {
          value: 'DOMAIN_WHOIS',
          display: 'DOMAIN_WHOIS'
        },
        {
          value: 'DNS_LOOKUP',
          display: 'DNS_LOOKUP'
        },
        {
          value: 'EVENT',
          display: 'EVENT'
        },
        {
          value: 'FORUM_POST',
          display: 'FORUM_POST'
        },
        {
          value: 'INCIDENTS',
          display: 'INCIDENTS'
        },
        {
          value: 'INTEL_INCIDENT',
          display: 'INTEL_INCIDENT'
        },
        {
          value: 'INTELLIGENCE',
          display: 'INTELLIGENCE'
        },
        {
          value: 'LOCATION',
          display: 'LOCATION'
        },
        {
          value: 'MARKETPLACE_LISTING',
          display: 'MARKETPLACE_LISTING'
        },
        {
          value: 'PASTE',
          display: 'PASTE'
        },
        {
          value: 'SPECIFIC_TTP',
          display: 'SPECIFIC_TTP'
        },
        {
          value: 'TECHNICAL_SOURCE',
          display: 'TECHNICAL_SOURCE'
        },
        {
          value: 'STIX_PACKAGE',
          display: 'STIX_PACKAGE'
        },
        {
          value: 'WEB_PAGE',
          display: 'WEB_PAGE'
        },
        {
          value: 'WEB_SOURCE',
          display: 'WEB_SOURCE'
        },
        {
          value: 'WHOIS',
          display: 'WHOIS'
        },
        {
          value: 'IP_WHOIS',
          display: 'IP_WHOIS'
        },
        {
          value: 'VULNERABILITY',
          display: 'VULNERABILITY'
        },
        {
          value: 'EXPLOIT',
          display: 'EXPLOIT'
        },
        {
          value: 'VULNERABILITY_EXPLOIT',
          display: 'VULNERABILITY_EXPLOIT'
        },
        {
          value: 'INDICATOR_FEED',
          display: 'INDICATOR_FEED'
        }
      ],
      type: 'select',
      options: [
        {
          value: 'ACTORS',
          display: 'ACTORS'
        },
        {
          value: 'AGGREGATE_DATA_BREACH',
          display: 'AGGREGATE_DATA_BREACH'
        },
        {
          value: 'BLOG_POST',
          display: 'BLOG_POST'
        },
        {
          value: 'CAMPAIGNS',
          display: 'CAMPAIGNS'
        },
        {
          value: 'CHAT_MESSAGE',
          display: 'CHAT_MESSAGE'
        },
        {
          value: 'CLIENT_INCIDENT',
          display: 'CLIENT_INCIDENT'
        },
        {
          value: 'CLOSED_SOURCES',
          display: 'CLOSED_SOURCES'
        },
        {
          value: 'DATA_BREACH',
          display: 'DATA_BREACH'
        },
        {
          value: 'DOMAIN_WHOIS',
          display: 'DOMAIN_WHOIS'
        },
        {
          value: 'DNS_LOOKUP',
          display: 'DNS_LOOKUP'
        },
        {
          value: 'EVENT',
          display: 'EVENT'
        },
        {
          value: 'FORUM_POST',
          display: 'FORUM_POST'
        },
        {
          value: 'INCIDENTS',
          display: 'INCIDENTS'
        },
        {
          value: 'INTEL_INCIDENT',
          display: 'INTEL_INCIDENT'
        },
        {
          value: 'INTELLIGENCE',
          display: 'INTELLIGENCE'
        },
        {
          value: 'LOCATION',
          display: 'LOCATION'
        },
        {
          value: 'MARKETPLACE_LISTING',
          display: 'MARKETPLACE_LISTING'
        },
        {
          value: 'PASTE',
          display: 'PASTE'
        },
        {
          value: 'SPECIFIC_TTP',
          display: 'SPECIFIC_TTP'
        },
        {
          value: 'TECHNICAL_SOURCE',
          display: 'TECHNICAL_SOURCE'
        },
        {
          value: 'STIX_PACKAGE',
          display: 'STIX_PACKAGE'
        },
        {
          value: 'WEB_PAGE',
          display: 'WEB_PAGE'
        },
        {
          value: 'WEB_SOURCE',
          display: 'WEB_SOURCE'
        },
        {
          value: 'WHOIS',
          display: 'WHOIS'
        },
        {
          value: 'IP_WHOIS',
          display: 'IP_WHOIS'
        },
        {
          value: 'VULNERABILITY',
          display: 'VULNERABILITY'
        },
        {
          value: 'EXPLOIT',
          display: 'EXPLOIT'
        },
        {
          value: 'VULNERABILITY_EXPLOIT',
          display: 'VULNERABILITY_EXPLOIT'
        },
        {
          value: 'INDICATOR_FEED',
          display: 'INDICATOR_FEED'
        }
      ],
      multiple: true,
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'blocklist',
      name: 'Ignore List',
      description: 'List of domains and IPs that you never want to looked up in Digital Shadows',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: false
    },
    {
      key: 'domainBlocklistRegex',
      name: 'Ignore Domain Regex',
      description: 'Domains that match the given regex will not be looked up.',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: false
    },
    {
      key: 'ipBlocklistRegex',
      name: 'Ignore IP Regex',
      description: 'IPs that match the given regex will not be looked up.',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: false
    }
  ]
};
