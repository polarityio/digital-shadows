# Polarity Digital Shadows Integration

Digital Risk Protection Software is designed to protect you from external threats, continually identifying where your assets are exposed, providing sufficient context to understand the risk, and options for remediation.
The Polarity Digital Shadows integration allows the Polarity user to quickly perform research against the Digital Shadow's search features.

> ***Note***: In order to look up threat actors in Digitial Shadows, download the ds_actors CSV found here and add it as a whitelisted channel in Digital Shadows for the integration function correctly.

## Digital Shadows Integration Options 

### Base URL for the Digital Shadows API
The base URL for the Digital Shadows API including the schema (i.e., https://).
Default for the Digital Shadow Api is: https://portal-digitalshadows.com/api

### API Key 
Digital Shadows API Key. Can be found in your account settings. 

### API Secret 
Valid Digital Shadows API Secret Key. The secret key can be found in association with the api key. 

### Maximum Number of Results 
The maximum number of API search results that will be displayed in the Polarity Overlay window. (Default: 20)

### Record Types
Restrict the result types to only those selected. At least one value is required. CLOSED_SOURCES, INCIDENTS, INDICATOR_FEED, INTELLIGENCE, TECHNICAL_SOURCE, VULNERABILITY_EXPLOIT, WHOIS and WEB_SOURCE act as groupings of multiple types
    
### Ignore List
List of domains and IPs that you never want to looked up in Digital Shadows

### Ignore Domain Regex
Domains that match the given regex will not be looked up.

### Ignore IP Regex
IPs that match the given regex will not be looked up.

      
## Installation Instructions

Installation instructions for integrations are provided on the [PolarityIO GitHub Page](https://polarityio.github.io/).

## Polarity

Polarity is a memory-augmentation platform that improves and accelerates analyst decision making.  For more information about the Polarity platform please see:

https://polarity.io/
