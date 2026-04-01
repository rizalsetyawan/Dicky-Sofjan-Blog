import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Default seed data ────────────────────────────────────────────────────────

const defaultGallery = [
  { id: 1, caption: 'Graduate seminar on Inter-Religious Studies', location: 'Universitas Gadjah Mada, Yogyakarta', date: '2023', category: 'academia', tags: ['teaching', 'ugm', 'graduate'], src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=75' },
  { id: 2, caption: 'UNFCCC COP28 Faith Pavilion presentation', location: 'Dubai, UAE', date: '2023', category: 'conference', tags: ['climate', 'cop28', 'keynote'], src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75' },
  { id: 3, caption: 'Nglanggeran volcanic landscape', location: 'Gunung Kidul, Yogyakarta', date: '2022', category: 'ecoproject', tags: ['nglanggeran', 'conservation'], src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=75' },
  { id: 4, caption: 'Globethics Board of Directors meeting', location: 'Geneva, Switzerland', date: '2022', category: 'conference', tags: ['globethics', 'board'], src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=75' },
  { id: 5, caption: 'Community engagement at Nglanggeran village', location: 'Gunung Kidul, Yogyakarta', date: '2022', category: 'ecoproject', tags: ['community', 'nglanggeran'], src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=75' },
  { id: 6, caption: 'G20 Interfaith Forum panel discussion', location: 'Bali, Indonesia', date: '2022', category: 'conference', tags: ['g20', 'interfaith'], src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=75' },
  { id: 7, caption: 'Reforestation project launch', location: 'Nglanggeran, Gunung Kidul', date: '2022', category: 'ecoproject', tags: ['reforestation', 'ecology'], src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=75' },
  { id: 8, caption: 'EU-Indonesia Forum on Democracy and Islam', location: 'Brussels, Belgium', date: '2021', category: 'conference', tags: ['eu', 'democracy', 'islam'], src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=75' },
  { id: 9, caption: 'UGM Faculty of Graduate Studies reception', location: 'Universitas Gadjah Mada, Yogyakarta', date: '2021', category: 'academia', tags: ['ugm', 'faculty', 'academic'], src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=75' },
  { id: 10, caption: 'Interfaith dialogue workshop', location: 'Yogyakarta, Indonesia', date: '2021', category: 'academia', tags: ['interfaith', 'dialogue', 'workshop'], src: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=400&q=75' },
  { id: 11, caption: 'OHCHR Expert Consultation on religion and human rights', location: 'Geneva, Switzerland', date: '2020', category: 'conference', tags: ['ohchr', 'human rights', 'un'], src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=75' },
  { id: 12, caption: 'Nglanggeran morning mist at sunrise', location: 'Gunung Kidul, Yogyakarta', date: '2021', category: 'ecoproject', tags: ['nature', 'landscape'], src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=75' },
];

const defaultPublications = [
  { id: 1, category: 'journal', title: 'Islamic Environmentalism and the Ethics of Conservation in Southeast Asia', journal: 'Journal of Faith and International Affairs', volume: '19', issue: '3', pages: '1–14', year: 2021, abstract: 'Explores the theological and ethical frameworks within Islamic tradition that support environmental stewardship and conservation, with case studies from Southeast Asia.', doi: null, tags: ['Islamic ethics', 'environment', 'Southeast Asia'] },
  { id: 2, category: 'journal', title: 'Religious Plurality and Democratic Governance: The Indonesian Case', journal: 'Review of Faith and International Affairs', volume: '17', issue: '2', pages: '15–28', year: 2019, abstract: 'Analyses the relationship between Islamic pluralism and democratic governance in post-Reformasi Indonesia, drawing on field research in Java and Sumatra.', doi: null, tags: ['pluralism', 'democracy', 'Indonesia'] },
  { id: 3, category: 'journal', title: 'Faith at COP: Religious Communities and Climate Diplomacy', journal: 'Journal of Middle Eastern and North African Studies', volume: '14', issue: '1', pages: '44–59', year: 2023, abstract: 'Examines the growing role of faith communities in international climate negotiations, focusing on the Faith Pavilion at UNFCCC-COP meetings.', doi: null, tags: ['climate', 'religion', 'diplomacy'] },
  { id: 4, category: 'book', title: 'Religion, Politics and Governance in Contemporary Indonesia', publisher: 'Yayasan Obor Indonesia / Areca Books', year: 2016, abstract: 'A comprehensive study of the interplay between Islamic political movements, governance structures, and civil society in democratic Indonesia.', tags: ['Indonesia', 'politics', 'Islam', 'governance'] },
  { id: 5, category: 'book', title: 'Interfaith Ethics: A Reader for the Global Context', publisher: 'Globethics Publications, Geneva', year: 2020, abstract: 'An interdisciplinary reader bringing together perspectives from major world religions on shared ethical challenges in a globalised world.', tags: ['interfaith', 'ethics', 'global'] },
  { id: 6, category: 'chapter', title: 'Islam and Human Rights in the ASEAN Context', bookTitle: 'Human Rights and Religion in Southeast Asia', publisher: 'Mizan Press', year: 2018, abstract: 'Examines the contested terrain between human rights frameworks and Islamic jurisprudence in ASEAN member states.', tags: ['human rights', 'Islam', 'ASEAN'] },
  { id: 7, category: 'globethics', title: 'Ethics and the Environment: An Islamic Perspective', publisher: 'Globethics Publications', year: 2019, abstract: 'A contribution to the Globethics series exploring Islamic ethical principles relevant to environmental sustainability and ecological responsibility.', tags: ['Islamic ethics', 'environment', 'Globethics'] },
  { id: 8, category: 'media', title: 'Faith Communities Must Lead on Climate', outlet: 'The Diplomat', date: 'December 2023', description: 'Op-ed following COP28 arguing that religious communities must take a more assertive role in climate advocacy and ecological stewardship.', url: 'https://thediplomat.com', tags: ['climate', 'faith', 'COP28'] },
  { id: 9, category: 'media', title: 'Indonesia\'s Moderate Islam is a Global Asset', outlet: 'Forbes Asia', date: 'August 2019', description: 'Commentary on Indonesia\'s tradition of Islamic moderation and its potential role in addressing global religious extremism.', url: null, tags: ['Indonesia', 'Islam', 'moderation'] },
];

const defaultEvents = [
  { id: 1, title: 'UNFCCC Conference of the Parties (COP28)', platform: 'UNFCCC-COP', location: 'Dubai, UAE', date: 'December 2023', year: 2023, role: 'Faith Pavilion Presenter', topic: 'Islamic Foundations of Climate Ethics', description: 'Presented Islamic environmental ethics frameworks at the official UNFCCC Faith Pavilion, drawing on Quranic concepts of stewardship (khalifa) and the prohibition of corruption (fasad).', tags: ['climate', 'COP28', 'faith'] },
  { id: 2, title: 'G20 Interfaith Forum', platform: 'G20 Interfaith Forum', location: 'Bali, Indonesia', date: 'September 2022', year: 2022, role: 'Keynote Speaker', topic: 'Religion, Sustainability and the G20 Agenda', description: 'Delivered a keynote address connecting religious values with the G20\'s sustainable development priorities.', tags: ['G20', 'sustainability', 'keynote'] },
  { id: 3, title: 'European Parliament Intergroup on Faith & Belief', platform: 'EU Institutions', location: 'Brussels, Belgium', date: 'March 2021', year: 2021, role: 'Invited Speaker', topic: 'Islamic Pluralism and European Democratic Values', description: 'Invited to address the European Parliament intergroup on the compatibility of Islamic pluralism with European democratic norms.', tags: ['EU', 'Islam', 'democracy'] },
  { id: 4, title: 'OHCHR Expert Consultation on Freedom of Religion', platform: 'OHCHR', location: 'Geneva, Switzerland', date: 'November 2020', year: 2020, role: 'Expert Witness', topic: 'Minority Religious Rights in ASEAN', description: 'Provided expert testimony on minority religious rights protection mechanisms in ASEAN countries.', tags: ['OHCHR', 'human rights', 'ASEAN'] },
  { id: 5, title: 'UNFCCC Conference of the Parties (COP27)', platform: 'UNFCCC-COP', location: 'Sharm el-Sheikh, Egypt', date: 'November 2022', year: 2022, role: 'Panel Speaker', topic: 'Faith-based Environmental Action in the Global South', description: 'Panelist on faith-based environmental action, presenting the Nglanggeran Eco-Project as a model of spiritually-grounded ecological restoration.', tags: ['COP27', 'ecology', 'faith'] },
  { id: 6, title: 'Carnegie Council for Ethics in International Affairs', platform: 'Carnegie Council', location: 'New York, USA', date: 'April 2017', year: 2017, role: 'Presenter', topic: 'Religion and Ethics in Global Governance', description: 'Presented research on the role of religious ethics in shaping international governance frameworks during a Carnegie Council visiting fellowship.', tags: ['Carnegie', 'global governance', 'ethics'] },
];

// ─── Init function ────────────────────────────────────────────────────────────

export function initData(dataDir) {
  const files = {
    gallery:      defaultGallery,
    publications: defaultPublications,
    events:       defaultEvents,
  };

  for (const [name, defaultData] of Object.entries(files)) {
    const filePath = path.join(dataDir, `${name}.json`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
      console.log(`  📄  Initialized ${name}.json`);
    }
  }
}
