export const MOCK_UNIVERSITIES = [
  { id: 1, name: "University of Lagos", code: "UNILAG", email: "info@unilag.edu.ng", phone_number: "", address: "Akoka, Lagos", status: "ACTIVE" },
  { id: 2, name: "University of Ibadan", code: "UI", email: "info@ui.edu.ng", phone_number: "", address: "Ibadan, Oyo", status: "ACTIVE" },
  { id: 3, name: "Covenant University", code: "CU", email: "info@covenantuniversity.edu.ng", phone_number: "", address: "Ota, Ogun", status: "INACTIVE" },
  { id: 4, name: "Lagos State University", code: "LASU", email: "info@lasu.edu.ng", phone_number: "", address: "Ojo, Lagos", status: "SUSPENDED" },
]

export const MOCK_USERS = [
  { id: 1, name: "Ada Okafor", email: "ada@unilag.edu.ng", role: "STUDENT", status: "ACTIVE" },
  { id: 2, name: "Tunde Bello", email: "tunde@unilag.edu.ng", role: "STUDENT", status: "ACTIVE" },
  { id: 3, name: "Musa Ibrahim", email: "musa@ui.edu.ng", role: "DRIVER", status: "ACTIVE" },
  { id: 4, name: "Chinedu Eze", email: "chinedu@ui.edu.ng", role: "DRIVER", status: "PENDING" },
  { id: 5, name: "Funke Adeyemi", email: "funke@unilag.edu.ng", role: "TRANSPORT_ADMIN", status: "ACTIVE" },
  { id: 6, name: "Ngozi Obi", email: "ngozi@cu.edu.ng", role: "STUDENT", status: "INACTIVE" },
]

export const MOCK_INVITATIONS = [
  { id: 1, email: "admin@unilag.edu.ng", status: "PENDING" },
  { id: 2, email: "transport@ui.edu.ng", status: "PENDING" },
  { id: 3, email: "ops@cu.edu.ng", status: "APPROVED" },
]

export const MOCK_AUDIT_LOGS = [
  { id: 1, actor: "demo.admin", action: "Created university", target: "UNILAG", time: "2026-11-10 09:12" },
  { id: 2, actor: "demo.admin", action: "Invited admin", target: "admin@unilag.edu.ng", time: "2026-11-10 09:30" },
  { id: 3, actor: "funke", action: "Approved driver", target: "Musa Ibrahim", time: "2026-11-10 10:05" },
  { id: 4, actor: "demo.admin", action: "Deactivated university", target: "CU", time: "2026-11-10 11:40" },
]
